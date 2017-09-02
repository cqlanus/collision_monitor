const Sequelize = require('sequelize');
const db = require('../db');

const Severity = db.define('severity', {
  magnitude: {
    type: Sequelize.STRING,
    notNull: true
  }
});

module.exports = Severity;