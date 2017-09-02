const Sequelize = require('sequelize');
const db = require('../db');

const Message = db.define('message', {
  content: {
    type: Sequelize.TEXT,
    notNull: true
  },
  isRead: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Message;