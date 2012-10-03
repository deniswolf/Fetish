var locomotive = require('locomotive'),
	Controller = locomotive.Controller,
	Model = require('../models/entity_model');

var C = new Controller();

C.index = function(){
	var self = this,
		entity_id = self.param('entity_id');

	Model.findById(
		entity_id,
		function(err, data){
			if (err) self.render();
			self.entity_id = entity_id;
			self.comments = data.comments;
			self.render();
		}
	);
};

C.create = function(){
	var self = this,
		entity_id = self.param('entity_id'),
		comment = self.param('comment');

	Model.findById(
		entity_id,
		function(err, data){
			if (err) self.redirect('/entities/'+entity_id+'/comments');
			data.comments.push(comment);

			data.save(function(err){
				if (err) return handleError(err);
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
					self.redirect('/entities/'+entity_id+'/comments');
				});

			});
	} else {
		self.redirect('/entities/'+entity_id+'/comments');
	}
};

module.exports = C;
