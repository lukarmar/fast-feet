const { Sequelize } = require('sequelize');
const models = require('../models');
const databaseConfig = require('../config/database');

class DatabaseConnecting {
  constructor() {
    this.runConnection();
  }

  runConnection() {
    this.connection = new Sequelize(databaseConfig);

    this.connection
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully');

        models.forEach(model => model.init(this.connection));
      })
      .catch(error => {
        console.error(error);
      });
  }
}

module.exports = new DatabaseConnecting();
