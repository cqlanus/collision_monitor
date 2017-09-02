const Sequelize = require('sequelize');
const db = require('../db');

const Observation = db.define('observation', {
  observedOn: {
    type: Sequelize.DATE,
    notNull: true
  },
  isPublic: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
});

module.exports = Observation;