
'use strict';

module.exports = {
  loadPriority:  1000,
  startPriority: 1000,
  stopPriority:  1000,
  initialize: function(api, next) {
    api.classes = {};
    let globby = require('globby');
    let path = require('path');

    globby(path.resolve('./support/classes/*.js'))
    .then((files) => {
      files.forEach((file) => {
        try {
          let targetClass = require(file);
          let fileName = file.split('/').slice(-1)[0].split('.')[0];
          api.classes[fileName] = targetClass;
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
