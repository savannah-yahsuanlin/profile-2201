const {expect} = require('chai')
const { db, models: { School } } = require('../index')
const seed = require('../../../script/seed');

describe('School model', () => {
  let school;
  beforeEach(async() => {
    school = (await seed()).schools; 
  })

  describe('seed data', () => {
    it('there is 4 schools', () => {
      expect(school.length).to.equal(4)
    })
    it('Latest school name is Fullstack Academy ', () => {
      expect(school[0].dataValues.name).to.equal('Fullstack Academy')
    })
  })
}) 