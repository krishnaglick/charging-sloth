
'use strict';

module.exports = {
  loadPriority:  1002,
  startPriority: 1002,
  stopPriority:  1002,
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
          console.log(`${file} error: `, x);
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
