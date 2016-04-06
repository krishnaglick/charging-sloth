
module.exports = class Client {
  constructor() {
    this.client = new ActionheroClient();
    this.client.connect();
  }

  joinServer(player) {
    this.client.action('joinServer', player, function() {
      console.log('whatami: ', arguments);
    });
  }
};
