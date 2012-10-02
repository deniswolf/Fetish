var	mongoose = require('mongoose'),
	config = require('../config/database.json'),
	connection = mongoose.createConnection(config.host, config.database);


module.exports = function initializeDataBase () {

	return {
		connection: connection,
		type: 'mongoose'
	};
};