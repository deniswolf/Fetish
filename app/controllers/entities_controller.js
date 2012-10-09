var locomotive = require('locomotive'),
	Controller = locomotive.Controller,
	Model = require('../models/entity_model'),
	socketIoRoom = require('../sockets/entities_socket').room;

var C = new Controller();

C.index = function(){
	var self = this;
	self.user = self.req.user;

	Model.find(null,null,{sort:'name'},function(err, data){
		if (err) self.render();
		self.entities = data;
		self.render();
	});
};

C.new = function(){
	var self = this;
	self.user = self.req.user;
	self.render();
};

C.create = function(){
	var self = this,
		entity = self.param('entity');
		self.user = self.req.user;

	if (entity){
		Model.create(
			entity,
			function(err){
				if (err) return handleError(err);
				socketIoRoom.emit('updateAll',true);
				self.redirect('/');
			});
	} else {
		self.render('new');
	}
};

C.edit = function(){
	var self = this,
		id = self.param('id');
		self.user = self.req.user;

	if (id){
		Model.findById(
			id,
			function(err, data){
				if (err) return handleError(err);
				self.entity = data;
				self.render();
			});
	} else {
		self.redirect('/');
	}
};

C.update = function(){
	var self = this,
		id = self.param('id'),
		entity = self.param('entity');
		self.user = self.req.user;

	if (id){
		Model.findByIdAndUpdate(
			id,
			entity,
			function(err){
				if (err) return handleError(err);
				self.redirect('/');
			}
			);

	} else {
		self.redirect('/');
	}
};

C.destroy = function(){
	var self = this,
		id = self.param('id');
		self.user = self.req.user;

	if (id){
		Model.findByIdAndRemove(
			id,
			function(err){
				if (err) return handleError(err);
				self.redirect('/');
			}
			);

	} else {
		self.redirect('/');
	}
};

C.show = function(){
	var self = this,
		id = self.param('id');
		self.user = self.req.user;

	if (id){
		Model.findById(
			id,
			function(err, data){
				if (err) return handleError(err);
				self.entity = data;
				self.render();
			});
	} else {
		self.render();
	}
};


module.exports = C;
