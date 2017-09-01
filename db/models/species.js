const Sequelize = require('sequelize');
const db = require('../db');

const Species = db.define('species', {
  name: {
    type: Sequelize.STRING,
    notNull: true
  }
});

module.exports = Species;