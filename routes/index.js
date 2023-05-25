const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const shortenerUrl = require('./modules/shortenerUrl')
const history = require('./modules/history')

router.use('/', home)
router.use('/cool.alan', shortenerUrl)
router.use('/history',history)

module.exports = router