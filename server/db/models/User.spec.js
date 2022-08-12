const {expect} = require('chai')
const { db, models: { User } } = require('../index')
const seed = require('../../../script/seed');

describe('User model', () => {
  let user;
  beforeEach(async() => {
    user = (await seed()).users; 
  })

  describe('seed data', () => {
    it('there is 1 user', () => {
      expect(user.length).to.equal(1)
    })
    it('username is Savannah', () => {
      expect(user[0].dataValues.name).to.equal('Savannah')
    })
    it('user has bio info', ()=> {
      expect(user[0].dataValues.bio).to.be.ok
    })
    it('user has image', () => {
      expect(user[0].dataValues.img).to.be.ok
    })
  })
}) 