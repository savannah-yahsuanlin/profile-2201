const Sequelize = require('sequelize')
const db = require('../db')


const School = db.define('school', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
	degree: {
		type: Sequelize.STRING,
	}
})

module.exports = School

