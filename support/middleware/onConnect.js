
'use strict';

module.exports = {
  name: 'websockets onConnect',
  global: true,
  priority: 1000,
  create: function(data) {
    return; //This intercepts everything. Not sure I want/need it atm.
    let err = null;
    console.log('connection! ', data.connection.type);
    if(data.connection.type === 'websocket') {
      console.log('data: ', data);
    }
  },
  destroy: (data) => {}
};
