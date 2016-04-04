
let client = new ActionheroClient();
client.connect();

client.on('connected', () => console.log('connected!'));
