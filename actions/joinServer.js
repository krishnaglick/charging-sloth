
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
    var error = null;
    //maek player
    let player = new api.classes.player(data.params);
    let fingerprint = data.connection.fingerprint;
    api.helpers.addPlayer(player, fingerprint)
    .then(() => {
      data.response.result = 'Join Successful!';
      next();
    })
    .catch(next);
  }
};
