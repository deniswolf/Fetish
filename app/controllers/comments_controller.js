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
			if (err) self.redirect('/entities');
			data.comments.push(comment);

			data.save(function(err){
				if (err) return handleError(err);
				self.redirect('/entities/'+entity_id);
			});
		}
	);
};

C.destroy = function(){
	var self = this,
		id = self.param('id');

	if (id){
		Model.findByIdAndRemove(
			id,
			function(err){
				if (err) return handleError(err);
				self.redirect('/entities/');
			}
			);

	} else {
		self.redirect('/entities/');
	}
};

C.show = function(){
	var self = this,
		id = self.param('id');

	if (id){
		Model.findById(
			id,
			function(err, data){
				if (err) return handleError(err);
				self.entity = data;
				self.render();
			});
	} else {
		self.render('index');
	}
};


module.exports = C;
