const db = require('./db')

const User = require('./models/User')
const Work = require('./models/Work')


module.exports = {
  db,
  models: {
    User,
    Work
  },
}
