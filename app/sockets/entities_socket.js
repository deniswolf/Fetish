var Model = require('../models/entity_model');

exports.init = function initEntitiesSocket (io) {
	var room = io;

	room.on('connection',function(socket){
		Model.find(null,null,{sort:'name'},function(err, entities){
			if (err) return;
			socket.emit('publishAll', entities);
		});
	});


	exports.room = room;
};