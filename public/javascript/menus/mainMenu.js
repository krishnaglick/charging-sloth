
exports.create = function(game) {
  game.add.image(0, 0, 'earth');
  game.add.button(
    50, //x
    160, //y
    'play', //image key in game cache
    function(targetObject, unsure, aBoolean) { debugger; }, //action () => {}
    this/*, //context
    null, //image when in/over state
    null, //image when out state
    null, //image when down state
    null, //image when up state
    null //group, default 'World'
  */);
};
