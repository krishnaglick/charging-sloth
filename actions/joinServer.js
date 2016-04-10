
'use strict';

exports.action = {
  name:                   'joinServer',
  description:            'joinServer',
  blockedConnectionTypes: [],
  outputExample:          {},
  matchExtensionMimeType: false,
  version:                1.0,
  toDocument:             true,
  middleware:             [],

  inputs: {
    name: { required: true },
    otherAttribute: {}
  },

  run: function(api, data, next){
    let error = null;
    //if(data.player) //Player already exists...
    let player = new api.classes.player(data.params);
    let fingerprint = data.connection.fingerprint;
    console.log(data.player);
    api.helpers.addPlayer(player, fingerprint)
    .then(() => {
      data.response.result = 'success';
      next();
    })
    .catch(next);
  }
};
