const Sequelize = require('sequelize');
const db = require('../db');

const Place = db.define('place', {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Place;