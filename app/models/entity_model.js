var db = require('../../db');

var EntitySchema = new db.mongoose.Schema({
	name: String,
	owners: Array,
	description: String
});

var Entity = db.connection.model('Entity', EntitySchema);




module.exports = Entity;