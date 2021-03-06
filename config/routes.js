// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.

module.exports = function routes() {
	this.root('entities#index');
	this.resources('entities', function(){
		this.resources('comments');
	});
	this.resources('logs');
	this.match('/auth/login','passport#login');
	this.match('/auth/callback','passport#callback');
	this.match('/auth/logout','passport#logout');
};
