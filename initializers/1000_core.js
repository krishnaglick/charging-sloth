'use strict';

module.exports = {
  loadPriority:  1000,
  startPriority: 1000,
  stopPriority:  1000,
  initialize: function(api, next){
    api.core = {};

    if(api.id !== 'actionhero-worker-1') {
      //I don't run tasks
      api.tasks.minTaskProcessors = -1;
    }

    next();
  },
  start: function(api, next){
    next();
  },
  stop: function(api, next){
    next();
  }
};
