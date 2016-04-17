
'use strict';

module.exports = {
  name: 'addPlayerToDataObjectBasedOnId',
  global: true,
  priority: 1000,
  preProcessor: function(data) {
    console.log('has a connection');
    let id = data.connection.rawConnection.id;
    data.player = this.players[id];
  }
};
