
require("../scss/centerer.scss");
require("../css/game.css");

let Client = require('./client');
let Game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload: require('./preload').bind(Game),
  create: create,
  update: update,
  render: render
});
debugger;

let client = new Client();
window.client = client;

client.client.on('connected', () => console.log('connected!'));

document.getElementById('joinGame').addEventListener('click', () => {
  let player = {
    name: document.getElementById('charName').value
  };
  client.joinServer(player)
  .then(({result}) => {
    if(result == 'success') {
      //Start gaem
    }
  })
  .catch((err) => {
    debugger;
    //handle err
  });
});
