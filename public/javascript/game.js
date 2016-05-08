
require("../scss/centerer.scss");
require("../css/game.css");

let Client = require('./client');
let game = new Phaser.Game(800, 600, Phaser.AUTO, 'Gaem');
let startupOptions = {
  preload: () => {
    require('./preload.js').sprites(game);
    require('./preload.js').terrain(game);
    require('./preload.js').buttons(game);
  },
  create: () => {
    game.physics.startSystem(Phaser.Physics.P2);
    game.state.start('mainMenu');
  },
  update: () => {},
  render: () => {}
};

let client = new Client();
window.client = client;

client.client.on('connected', () => console.log('connected!'));

document.getElementById('joinGame').addEventListener('click', () => {
  let player = {
    name: document.getElementById('charName').value
  };
  client.joinServer(player)
  .then(({result}) => {
    console.log(result);
    if(result == 'success') {
      //Start gaem
      game.state.add('mainMenu', require('./menus/mainMenu.js'));
      game.state.add('load', startupOptions, true);
    }
  })
  .catch((err) => {
    debugger;
    //handle err
  });
});
