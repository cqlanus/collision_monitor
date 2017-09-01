const Sequelize = require('sequelize');
const db = require('../db');

const Photo = db.define('photo', {
  url: {
    type: Sequelize.STRING,
    notNull: true,
    validate: { isUrl: true }
  }
});

module.exports = Photo;