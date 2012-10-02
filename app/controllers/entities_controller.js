var locomotive = require('locomotive'),
	Controller = locomotive.Controller;

var C = new Controller();

C.index = function(){
  this.render();
};

C.new = function(){
  this.render();
};

C.create = function(){
	return;
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
