var config = require('../config.json')["socket.io"],
	io = require('socket.io').listen(config.port),
	//as for now - init only one socket file
	socketListeners =  [ require('../../app/sockets/entities_socket.js') ];

	io.set('log level', 1);

	socketListeners.forEach(function attachSocket (socketListener) {
		socketListener.init(io.of('/entities'));
	});