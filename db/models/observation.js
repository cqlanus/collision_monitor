const Sequelize = require('sequelize');
const db = require('../db');

const Observation = db.define('observation', {});

module.exports = Observation;