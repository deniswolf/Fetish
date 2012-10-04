exports.init = function initEntitiesSocket (io) {
	io.on('connection',function(socket){
		socket.broadcast.emit('connected to entities socket');
	});
};