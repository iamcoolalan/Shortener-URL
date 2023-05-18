const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const shortenerUrl = require('./modules/shortenerUrl')

router.use('/', home)
router.use('/cool.alan', shortenerUrl)

module.exports = router