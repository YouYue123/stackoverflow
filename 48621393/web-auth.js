function initRoutes(app) {
  var express = require('express');  
  var router = express.Router();

  router.get("/basic", function(request, response) {
    response.json({ success: true, path: '/auth/basic' });
  });

  router.get("/oauth2", function(request, response) {
    response.json({ success: false, path: '/auth/oauth2' });
  });

  router.get("/openid", function(request, response) {
    response.json({ success: false, path: '/auth/openid' });
  });

  app.use('/auth', router); // mount the module
}

function init(app) {
  console.log(app === require('express')())
  initRoutes(app);                     //-- This does work (but don't like it)
  //initRoutes(require('express')());  //-- This does NOT work!
}

module.exports = (function() {  
  return {    
    init : init
  };  
}());