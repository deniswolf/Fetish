exports.init = function initEntitiesSocket (io) {
	exports.room = io;
	io.on('connection',function(socket){

	});
};

