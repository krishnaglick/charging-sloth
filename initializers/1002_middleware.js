
'use strict';

module.exports = {
  loadPriority:  1002,
  startPriority: 1002,
  stopPriority:  1002,
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
          api.connections.addMiddleware(middleware);
        }
        catch(x) {
          console.log(`${file} error: `, x);
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
