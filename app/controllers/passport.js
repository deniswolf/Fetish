var locomotive = require('locomotive'),
	Controller = locomotive.Controller,
	passport   = require('passport');

var C = new Controller();

C.login = function passportLogin(){
	passport.authenticate('google',
		{
			scope: ['https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email']
		})(this.__req, this.__res, this.__next);
};

C.logout = function passportLogout(){
	this.req.logout();
	this.redirect('/');
};

C.callback = function passportCallback(){
	passport.authenticate('google',
		{ failureRedirect: '/auth/login',
			successRedirect: '/'})(this.__req, this.__res, this.__next);
};

module.exports = C;
