var locomotive = require('locomotive'),
	Controller = locomotive.Controller,
	passport   = require('passport');

var action = new Controller();

action.login = function passportLogin(){
	passport.authenticate('google',
		{
			scope: ['https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email']
		})(this.__req, this.__res, this.__next);
};

action.logout = function passportLogout(){
	this.req.logout();
	this.redirect('/');
};

action.callback = function passportCallback(){
	passport.authenticate('google',
		{ failureRedirect: '/auth/login',
			successRedirect: '/'})(this.__req, this.__res, this.__next);
};

module.exports = action;
