const db = require('./db')

const User = require('./models/User')
const Work = require('./models/Work')
const School = require('./models/School')


module.exports = {
  db,
  models: {
    User,
    Work,
    School
  },
}
