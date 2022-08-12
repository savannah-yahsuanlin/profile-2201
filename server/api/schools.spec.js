/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const { db, models: { School } } = require('../db')
const seed = require('../../script/seed');
const app = require('../app')

describe('School routes', () => {
  beforeEach(async() => {
    await seed();
  })

  describe('GET /api/schools', () => {
      it('Return 4 schools', async () => {
      const res = await request(app)
        .get('/api/schools')
        .expect(200)

      expect(res.body).to.be.an('array');
      expect(res.body.length).to.equal(4);
      expect(res.body[0].name).to.be.equal('Fullstack Academy')
      })
    })
}) 
 