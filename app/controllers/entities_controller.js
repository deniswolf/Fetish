var locomotive = require('locomotive'),
	Controller = locomotive.Controller,
	Entity = require('../models/entity_model');

var C = new Controller();

C.index = function(){
	var self = this;
	Entity.find(function(err, data){
		if (err) self.render();
		self.entities = data;
		console.log('123123123123123',data);
		self.render();
	});
};

C.new = function(){
  this.render();
};

C.create = function(){
	var self = this;
	if (self.param('entity')){
		Entity.create(
			self.param('entity'),
			function(err){
				if (err) return handleError(err);
				self.redirect('/entities');
			});
	} else {
		self.render('new');
	}
};

C.edit = function(){
  this.render();
};

C.update = function(){
	return;
};

C.delete = function(){
	return;
};

C.destoy = function(){
	return;
};

C.show = function(){
  this.render();
};


module.exports = C;
