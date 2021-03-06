var Model = require('../../app/models/log_model');

function getIP(request){
  var ip_address = null;
	ip_address = request.connection.remoteAddress;

	return ip_address;
}

module.exports = function logAction(action, what) {
  var log = {};

      log.user = action.req.user;
      log.ip = getIP(action.req);
      log.what = what;

    Model.create(
      log,
      function(err, data){
        if (err) console.log('Log: failed to create with action:',action);
      }
    );
};