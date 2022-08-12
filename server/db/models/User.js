const Sequelize = require('sequelize')
const db = require('../db')


const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  bio: {
    type: Sequelize.TEXT,
  },
  img: {
    type: Sequelize.TEXT,
  },
  src: {
    type: Sequelize.STRING
  }
})

module.exports = User

