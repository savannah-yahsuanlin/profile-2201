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

router.put('/:id', async(req, res, next) => {
	try {
		const school = await School.findByPk(req.params.id)
		const updated = await school.update(req.body)
		res.json(updated)
	} catch (error) {
		next(error)
	}
})