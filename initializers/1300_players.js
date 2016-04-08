'use strict';

module.exports = {
  loadPriority:  1300,
  startPriority: 1300,
  stopPriority:  1300,
  initialize: function(api, next) {
    api.players = {};

    next();
  },
  start: function(api, next){
    next();
  },
  stop: function(api, next){
    next();
  }
};
