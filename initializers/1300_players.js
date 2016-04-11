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
      api.players[rawConnection.id] &&
        api.players[rawConnection.id].disconnect();
    });
    wsServer.on('connection', function(rawConnection){
      console.log('deep hook working', rawConnection.id);
    });
    next();
  },
  stop: function(api, next) {
    next();
  }
};
