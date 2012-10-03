var locomotive = require('locomotive'),
	Controller = locomotive.Controller,
	Model = require('../models/entity_model');

var C = new Controller();

C.index = function(){
	var self = this;

	Model.find(function(err, data){
		if (err) self.render();
		self.entities = data;
		self.render();
	});
};

C.new = function(){
	this.render();
};

C.create = function(){
	var self = this,
		entity = self.param('entity');

	if (entity){
		Model.create(
			entity,
			function(err){
				if (err) return handleError(err);
				self.redirect('/entities');
			});
	} else {
		self.render('new');
	}
};

C.edit = function(){
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

C.update = function(){
	var self = this,
		id = self.param('id'),
		entity = self.param('entity');

	if (id){
		Model.findByIdAndUpdate(
			id,
			entity,
			function(err){
				if (err) return handleError(err);
				self.redirect('/entities/'+id);
			}
			);

	} else {
		self.render('index');
	}
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
