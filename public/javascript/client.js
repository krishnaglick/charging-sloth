
module.exports = class Client {
  constructor() {
    this.client = new ActionheroClient();
    this.client.connect();
  }

  joinServer(player) {
    this.client.action('joinServer', player, (response) => {
      console.log('whatami: ', response);
    });
  }
};
