var	mongoose = require('mongoose'),
	config = require('../config/database.json'),
	connection = mongoose.createConnection(config.host, config.database);


module.exports = {
					connection: connection,
					type: 'mongoose',
					mongoose: mongoose
				};