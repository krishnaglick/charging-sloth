
require("../scss/centerer.scss");
require("../css/game.css");

let Client = require('./client');

let client = new Client();
window.client = client;

client.client.on('connected', () => console.log('connected!'));

document.getElementById('joinGame').addEventListener('click', () => {
  let player = {
    name: document.getElementById('charName').value
  };
  client.joinServer(player)
  .then(() => {
    //Start gaem
  })
  .catch((err) => {
    //handle err
  });
});
