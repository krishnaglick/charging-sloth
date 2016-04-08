
'use strict';

let bluebird = require('bluebird');

exports.addPlayer = function(player, fingerprint) {
  return new bluebird.Promise((res, rej) => {
    //TODO: Validate player object
    let playerValid = true;
    if(!playerValid)
      return rej(new Error('Invalid player object!'));
    if(this.players[player.name])
      return rej(new Error('Player already exists!'));
    //Look into this.players[{fingerprint: player.name}];
    this.players[fingerprint] = player;
    //Emit to clients!
    console.log(this.players);
    res();
  });
};
