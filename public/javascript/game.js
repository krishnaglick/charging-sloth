
require("../scss/centerer.scss");

let client = new ActionheroClient();
window.client = client;
client.connect();
client.on('connected', () => console.log('connected!'));

//debugger;