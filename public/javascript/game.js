
require("../scss/centerer.scss");
require("../css/game.css");

let Client = require('./client');

let client = new Client();
window.client = client;

client.client.on('connected', () => console.log('connected!'));

document.getElementById('joinGame').addEventListener('click', () => {
  client.joinServer({ name: document.getElementById('charName').value });
});
