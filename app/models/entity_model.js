var db = require('../../db');

var EntitySchema = new db.mongoose.Schema({
	name: String,
	owners: [db.mongoose.Schema.Types.ObjectId],
	description: String,
	status: { type: String, default: "green" },
	comments: [{
		text: String,
		author: {},
		created: { type: Date, default: Date.now }
	}]
});

var Entity = db.connection.model('Entity', EntitySchema);




module.exports = Entity;