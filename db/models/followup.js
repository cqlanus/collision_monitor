const Sequelize = require('sequelize');
const db = require('../db');

const Followup = db.define('followup', {});

module.exports = Followup;