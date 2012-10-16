var locomotive = require('locomotive'),
    config = require('../../config/config.json'),
    feedback = config.feedback,
    hostname = config.hostname,
    Controller = locomotive.Controller,
    Model = require('../models/log_model');

var action = new Controller();

// Renderers

action.index = function() {
  var self = this;
  self.user = self.req.user;
  self.feedback = feedback;
  self.hostname = hostname;

  Model.find(null,null, function(err, data){
    if (err) console.log('Log: failed to index with req:',this.req);
    var logs = data.sort(
        //sort comments by 'created' field, new first
        function(a, b){
          return b.when.getTime() - a.when.getTime();
        });
    self.logs = logs;
    self.respond(
      {
        html:true
      });
  });
};

// Doers


action.destroy = function() {
  var self = this,
    id = self.param('id');
    self.user = self.req.user;

  if (id){
    Model.findByIdAndRemove(
      id,
      function(err){
        if (err) console.log('Log: failed to destroy with req:',this.req);
        self.redirect('/');
      }
    );
  } else {
    self.redirect('/');
  }
};


module.exports = action;