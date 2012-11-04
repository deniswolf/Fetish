var Model = require('../models/entity_model');

exports.init = function initEntitiesSocket (io) {
	var room = io;

	room.on('connection',function(socket){

		Model.find(null,null,{sort:'name'},function(err, entities){
			if (err) return;
			socket.emit('publishAll', entities);
		});

		socket
			.on('serverRemoveComment',function(entityId, id){
				Model.findById(
					entityId,
					function(err, entity){
						if (err) return console.log(err);

						var comment = entity.comments.id(id).remove();
						if(! comment) return;

						// logger(self, 'deleted comment: '+comment.text+' from '+ entity.name);
						entity.save(function(err){
							if (err) return console.log(err);
							room.emit('removeComment',entityId, id);
						});
				});
			})
			.on('serverAddComment',function(entityId, text){
				Model.findById(
					entityId,
					function(err, entity){
						if (err) return console.log(err);
						entity.comments.unshift({text: text});

						entity.save(function(err, entity){
							var comment = entity.comments[0];
							if (err) return handleError(err);

							// logger(self, 'added comment: '+comment.text+' on '+ entity.name);
							room.emit('addComment',entityId,comment);
						});
					}
				);
			});

	});


	exports.room = room;
};