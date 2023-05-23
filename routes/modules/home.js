const express = require('express')
const router = express.Router()

const ShortenerUrl = require('../../models/shortenerUrl')
const randomCode = require('../../utils/randomCode')

const PORT = process.env.PORT || 3000
const websiteName = `http://localhost:${PORT}/cool.alan/`

router.get('/', (req, res) => {
  res.render('index', { shortenerUrl: null })
})

router.post('/', (req, res) => {
  const originalUrl = req.body.OriginalUrl
  //check this url wether in DB or not
  ShortenerUrl.findOne({ originalUrl })
    .then(url => {
      if (url) {
        //yes, return existing code for user
        res.render('index', { shortenerUrl: `${websiteName}${url.shortenerCode}` })
      } else {
        //no, generate new code for user and save it in DB
        const shortenerCode = randomCode
        ShortenerUrl.create({
          originalUrl,
          shortenerCode
        })
        res.render('index', { shortenerUrl: `${websiteName}${shortenerCode}` })
      }
    })
    .catch(error => {
      console.log(error)
    })
})

module.exports = router