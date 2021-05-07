const express = require('express');
const routes = require('./routes');

require('./database');

class Application {
  constructor() {
    this.app = express();

    this.applyRouter();
  }

  applyRouter() {
    this.app.use(routes);
  }

  middlewares() {
    this.app.use(express.json);
  }
}

module.exports = Application;
