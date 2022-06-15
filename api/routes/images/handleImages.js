const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')


router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.post('/convertSvg', async (req, res) => {
	console.log(req.body)
	const fileContent =  await fs.promises.readFile(path.join('resources', 'images', `${req.body.filename}.svg`))
  	res.setHeader('Content-type', 'text/plain');
	res.send(fileContent)
})

module.exports = router


