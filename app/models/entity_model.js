var db = require('../../db');

var EntitySchema = new db.mongoose.Schema({
	name: String,
	owners: [db.mongoose.Schema.Types.ObjectId],
	description: String,
	status: String
});

var Entity = db.connection.model('Entity', EntitySchema);




module.exports = Entity;