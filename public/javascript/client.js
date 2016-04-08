
let bluebird = require('bluebird');

module.exports = class Client {
  constructor() {
    this.client = new ActionheroClient();
    this.client.connect();
  }

  joinServer(player) {
    return new bluebird.Promise((res, rej) => {
      this.client.action('joinServer', player, (response) => {
        if(response.error) return rej(new Error(response.error));
        res(response);
      });
    });
  }
};
