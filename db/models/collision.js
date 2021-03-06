const Sequelize = require('sequelize');
const db = require('../db');

const Collision = db.define('collision', {
  isAlive: {
    type: Sequelize.BOOLEAN,
    notNull: true
  }
});

module.exports = Collision;