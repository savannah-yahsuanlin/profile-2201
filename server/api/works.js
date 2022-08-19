const router = require('express').Router()
const { models: { Work }} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    let works = await Work.findAll()
    res.json(works)
  } catch (err) {
    next(err)
  }
})


router.get('/:id', async(req, res, next) => {
	try {
		const work = await Work.findByPk(req.params.id)
		res.json(work)
	} catch (error) {
		next(error)
	}
})

router.get('/:id/img', async(req, res, next) => {
  try {
    const work = await Work.findByPk(req.params.id)
		const buffer = Buffer.from(work.img.split(',')[1], 'base64')
		res.writeHead(200, {
			'Content-Type': 'image/png'
		})
    res.end(buffer)
  } catch (err) {
    next(err)
  }
})

router.put('/:id/edit', async(req, res, next) => {
	try {
		const work = await Work.findByPk(req.params.id)
		res.json(await work.update(req.body))
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