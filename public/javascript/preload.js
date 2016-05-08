
const assetPath = '../assets';

exports.sprites = function(game) {
  game.load.image('dude', `${assetPath}/sprites/dude.png`);
};

exports.terrain = function(game) {
  game.load.image('darkGrass', `${assetPath}/terrain/darkGrass.png`);
  game.load.image('earth', `${assetPath}/terrain/earth.png`);
  game.load.image('lightGrass', `${assetPath}/terrain/lightGrass.png`);
  game.load.image('lightSand', `${assetPath}/terrain/lightSand.png`);
  game.load.image('sand', `${assetPath}/terrain/sand.png`);
  game.load.image('scorchedEarth', `${assetPath}/terrain/scorchedEarth.png`);
};

exports.buttons = function(game) {
  game.load.image('play', `${assetPath}/buttons/play.png`);
};
