var locomotive = require('locomotive'),
	Controller = locomotive.Controller,
	Model = require('../models/entity_model'),
	socketIoRoom = require('../sockets/entities_socket').room;

var C = new Controller();

C.index = function(){
	var self = this,
		entity_id = self.param('entity_id');

	Model.findById(
		entity_id,
		function(err, data){
			if (err) self.render();
			self.entity_id = entity_id;

			self.comments = data.comments.sort(
				//sort comments by 'created' field, new first
				function(a, b){
					return b.created.getTime() - a.created.getTime();
				});
			self.render();
		}
	);
};

C.create = function(){
	var self = this,
		entity_id = self.param('entity_id'),
		comment = self.param('comment'),
		user = self.req.user;

		if (user) comment.author = user._json;

	Model.findById(
		entity_id,
		function(err, data){
			if (err) self.redirect('/entities/'+entity_id+'/comments');
			data.comments.push(comment);

			data.save(function(err){
				if (err) return handleError(err);
				socketIoRoom.emit('updateEntity',entity_id);
				self.redirect('/entities/'+entity_id+'/comments');
			});
		}
	);
};

C.destroy = function(){
	var self = this,
		entity_id = self.param('entity_id'),
		id = self.param('id');

	if (id){
		Model.findById(
			entity_id,
			function(err, data){
				if (err) return handleError(err);
				self.entity_id = entity_id;
				self.comment = data.comments.id(id).remove();
				data.save(function(err){
					if (err) return handleError(err);
					socketIoRoom.emit('updateEntity',entity_id);
					self.redirect('/entities/'+entity_id+'/comments');
				});

			});
	} else {
		self.redirect('/entities/'+entity_id+'/comments');
	}
};

module.exports = C;
