const Sequelize = require('sequelize')
const db = require('../db')

const Work = db.define('work', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
  },
  img: {
    type: Sequelize.STRING
  },
  startDate: {
    type: Sequelize.DATE
  },
	endDate: {
		type: Sequelize.DATE
	},
	link: {
		type: Sequelize.STRING,
	}
})

module.exports = Work