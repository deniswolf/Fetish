var db = require('../../db');

var Schema = new db.mongoose.Schema({
	user: {},
	ip: String,
	when:  { type: Date, default: Date.now },
	what: String
});

module.exports = db.connection.model('Log', Schema);
