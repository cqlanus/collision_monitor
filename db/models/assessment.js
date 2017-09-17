const Sequelize = require('sequelize');
const db = require('../db');

const Assessment = db.define('assessment', {
  isExpert: {
    type: Sequelize.BOOLEAN,
    notNull: true
  }
});

module.exports = Assessment;