var locomotive = require('locomotive'),
	Controller = locomotive.Controller,
	Model = require('../models/entity_model'),
	socketIoRoom = require('../sockets/entities_socket').room,
	config = require('../../config/config.json'),
	feedback = config.feedback,
	hostname = config.hostname,
	logger = require('../../lib/logger');

var action = new Controller();

action.index = function(){
	var self = this;
	self.user = self.req.user;
	self.feedback = feedback;
	self.hostname = hostname;

	Model.find(null,null,{sort:'name'},function(err, entities){
		if (err) self.render();
		self.entities = entities;
		self.respond({
			'html':true,
			'json':true
		});
	});
};

action.new = function(){
	var self = this;
	self.user = self.req.user;
	self.feedback = feedback;
	self.hostname = hostname;

	self.render();
};

action.create = function(){
	var self = this,
		entity = self.param('entity');
		self.user = self.req.user;

	if (entity){
		Model.create(
			entity,
			function(err){
				if (err) return handleError(err);
				logger(self, 'added entity: '+entity.name);
				socketIoRoom.emit('updateAll',true);
				self.redirect('/');
			});
	} else {
		self.render('new');
	}
};

action.edit = function(){
	var self = this,
		id = self.param('id');
		self.user = self.req.user;
		self.feedback = feedback;
		self.hostname = hostname;


	if (id){
		Model.findById(
			id,
			function(err, entity){
				if (err) return handleError(err);
				self.entity = entity;
				self.render();
			});
	} else {
		self.redirect('/');
	}
};

action.update = function(){
	var self = this,
		id = self.param('id'),
		entity_update = self.param('entity');
		self.user = self.req.user;

	if (id){
		Model.findByIdAndUpdate(
			id,
			entity_update,
			function(err, entity){
				if (err) return handleError(err);
				logger(self, 'updated entity: '+entity.name+' with '+JSON.stringify(entity_update));
				socketIoRoom.emit('updateEntity',id);
				self.redirect('/');
			}
			);

	} else {
		self.redirect('/');
	}
};

action.destroy = function(){
	var self = this,
		id = self.param('id');
		self.user = self.req.user;

	if (id){
		Model.findByIdAndRemove(
			id,
			function(err, entity){
				if (err) return handleError(err);
				logger(self, 'deleted entity: '+entity.name);
				socketIoRoom.emit('updateAll',true);
				self.redirect('/');
			}
			);

	} else {
		self.redirect('/');
	}
};

action.show = function(){
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


module.exports = action;
