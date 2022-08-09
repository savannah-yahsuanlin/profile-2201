const router = require('express').Router()
const { models: { Work }} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const works = await Work.findAll()
    res.json(works)
  } catch (err) {
    next(err)
  }
})


router.put('/:id', async(req, res, next) => {
	try {
		const work = await Work.findByPk(req.params.id)
		const updated = await work.update(req.body)
		res.json(updated)
	} catch (error) {
		next(error)
	}
})

router.delete('/:id', async(req, res, next) => {
	try {
		const work = await Work.findByPk(req.params.id);
    await work.destroy();
    res.send(work);
	} catch (error) {
		next(error)
	}
})

router.post('/', async(req, res, next) => {
	try {
		res.status(201).send(await Work.create(req.body))
	} catch (error) {
		next(error)
	}
})

module.exports = router