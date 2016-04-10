'use strict';

module.exports = {
  loadPriority:  1300,
  startPriority: 1300,
  stopPriority:  1300,
  initialize: function(api, next) {
    api.players = {};
    //debugger;
    //api.servers.servers.websocket

    next();
  },
  start: function(api, next) {
    let wsServer = api.servers.servers.websocket.server;
    wsServer.on('disconnection', function(rawConnection){
      api.players[rawConnection.id].disconnect();
    });
    wsServer.on('connection', function(rawConnection){
      //I may be needed.
    });
    next();
  },
  stop: function(api, next) {
    next();
  }
};
