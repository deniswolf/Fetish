var db = require('../../db');

var EntitySchema = new db.mongoose.Schema({
	name: String,
	owners: [ObjectId],
	description: String
});

var Entity = db.connection.model('Entity', EntitySchema);




module.exports = Entity;