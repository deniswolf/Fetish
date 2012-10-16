var Model = require('../app/models/log_model');

function getIP(request){
  var ip_address = null;
    try {
          ip_address = request.headers['x-forwarded-for'];
	}
	catch ( error ) {
		ip_address = request.connection.remoteAddress;
	}
	return ip_address;
}

exports = function logAction(action, what) {
  var log = {};

      log.user = action.req.user;
      log.ip = getIP(action.req);
      log.what = what;

    logModel.create(
      log,
      function(err, data){
        if (err) console.log('Log: failed to create with action:',action);
      }
    );
};