exports.init = function initEntitiesSocket (io) {
	io.sockets.on('connection',function(socket){
		socket.broadcast.emit('connected to entities socket');
	});
};