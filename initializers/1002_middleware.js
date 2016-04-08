
'use strict';

module.exports = {
  loadPriority:  1000,
  startPriority: 1000,
  stopPriority:  1000,
  initialize: function(api, next) {
    let globby = require('globby');
    let path = require('path');

    globby(path.resolve('./support/middleware/*.js'))
    .then((files) => {
      files.forEach((file) => {
        try {
          let middleware = require(file);
          Object.keys(middleware).forEach((key) => {
            if(typeof middleware[key] === 'function')
              middleware[key] = middleware[key].bind(api);
          });
          api.actions.addMiddleware(middleware);
        }
        catch(x) {
          console.log(x);
        }
      });
      next();
    });
  },
  start: function(api, next) {
    next();
  },
  stop: function(api, next) {
    next();
  }
};
