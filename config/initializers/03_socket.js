var socketIo = require('socket.io'),
	//as for now - init only one socket file
	sockets = require('../../app/sockets/entities_socket.js');

module.exports = function socketInit() {

	var app = this._routes._app;
	console.log('this is SOCKET app:', app);
var io = socketIo.listen(app);
	// sockets.init(io.listen(app););
};