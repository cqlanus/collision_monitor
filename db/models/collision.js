const Sequelize = require('sequelize');
const db = require('../db');

const Collision = db.define('collision', {});

module.exports = Collision;