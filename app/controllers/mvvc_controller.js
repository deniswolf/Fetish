var locomotive = require('locomotive'),
	Controller = locomotive.Controller,
	Model = require('../models/entity_model'),
	socketIoRoom = require('../sockets/entities_socket').room,
	config = require('../../config/config.json'),
	feedback = config.feedback,
	hostname = config.hostname,
	logger = require('../../lib/logger');

var action = new Controller();

action.show = function(){
	var self = this;
	self.user = self.req.user;
	self.feedback = feedback;
	self.hostname = hostname;

	Model.find(null,null,{sort:'name'},function(err, entities){
		if (err) self.render();
		self.entities = entities;
		self.render();
	});
};



module.exports = action;
