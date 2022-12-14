/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const { db, models: { Work } } = require('../db')
const seed = require('../../script/seed');
const app = require('../app')

describe('Work routes', () => {
  beforeEach(async() => {
    await seed();
  })

  describe('GET /api/works', () => {
      it('Return 5 work experiences', async () => {
      const res = await request(app)
        .get('/api/works')
        .expect(200)

      expect(res.body).to.be.an('array');
      expect(res.body.length).to.equal(5);
      expect(res.body[0].name).to.be.equal('Drone Forward')
      })
    })
})
 