const express = require('express')
const router = express.Router()

const ShortenerUrl = require('../../models/shortenerUrl')
const randomCode = require('../../utils/randomCode')

const PORT = process.env.PORT || 3000
const websiteName = `http://localhost:${PORT}/cool.alan/`

router.get('/', (req, res) => {
  ShortenerUrl.find()
    .sort({ _id: -1 })
    .limit(5)
    .lean()
    .then(urls => {
      res.render('index', { shortenerUrl: null, histories: urls })
    })
    .catch(error => {
      console.log(error)
      res.render('error', { layout: false, errorMessage: error.message })
    })

})

router.post('/', (req, res) => {
  const originalUrl = req.body.OriginalUrl

  const findOrCreate = randomCode.findOrCreate(originalUrl)

  findOrCreate.then(url => {
    ShortenerUrl.find()
      .sort({ _id: -1 })
      .limit(5)
      .lean()
      .then(urls => {
        res.render('index', { shortenerUrl: `${websiteName}${url}`, histories: urls })
      })
      .catch(error => {
        console.log(error)
        res.render('error', { layout: false, errorMessage: error.message })
      })

  })
    .catch(error => {
      console.log(error)
      res.render('error', { layout: false, errorMessage: error.message })
    })
})

module.exports = router