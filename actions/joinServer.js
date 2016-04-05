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

  inputs: {},

  run: function(api, data, next){
    var error = null;
    // your logic here
    next(error);
  }
};
