
'use strict';

module.exports = {
  name: 'websockets addPlayerToDataObjectBasedOnId',
  global: true,
  priority: 1000,
  preProcessor: function(data, next) {
    let id = data.connection.rawConnection.id;
    data.player = this.players[id];
    next();
  }
};
