
'use strict';

module.exports = {
  loadPriority:  1000,
  startPriority: 1000,
  stopPriority:  1000,
  initialize: function(api, next) {
    api.helpers = {};
    let globby = require('globby');
    let path = require('path');

    globby(path.resolve('./support/helpers/*.js'))
    .then((files) => {
      files.forEach((file) => {
        try {
          let helper = require(file);
          Object.keys(helper).forEach((key) => {
            api.helpers[key] = helper[key].bind(api);
          });
        }
        catch(x) {
          console.log(x);
        }
      });
      next();
    });
  },
  start: function(api, next){
    next();
  },
  stop: function(api, next){
    next();
  }
};
