exports.init = function initEntitiesSocket (io) {
	io.on('connection',function(socket){
		socket.emit('updateAll',true);
	});
};