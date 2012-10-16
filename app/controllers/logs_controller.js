var locomotive = require('locomotive'),
    Controller = locomotive.Controller,
    Model = require('../models/log_model');

var action = new Controller();

// Renderers

action.index = function() {
  var self = this;
  self.user = self.req.user;

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

action.show = function() {
  var self = this,
    id = self.param('id');
    self.user = self.req.user;

  if (id){
    Model.findById(
      id,
      function(err, data){
    if (err) console.log('Log: failed to show with req:',this.req);
        self.log = data;
        self.render();
      }
    );
  } else {
    self.render();
  }
};

// Doers

action.create = function() {
  var self = this,
    log = self.param('log');
    self.user = self.req.user;


  if (log){
    Model.create(
      log,
      function(err, data){
        if (err) console.log('Log: failed to create with req:',this.req);
        self.res.send(200, data);
      }
    );
  } else {
    self.redirect('/');
  }
};

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