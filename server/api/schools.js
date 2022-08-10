const router = require('express').Router()
const { models: { School }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const schools = await School.findAll()
    res.json(schools)
  } catch (err) {
    next(err)
  }
})
