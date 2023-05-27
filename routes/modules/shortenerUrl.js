//when client use short URL redirect to original URL
const express = require('express')
const router = express.Router()

const ShortenerUrl = require('../../models/shortenerUrl')

router.get('/:code', (req, res) => {
  const code = req.params.code

  //find original url in mongoDB by "code"
  ShortenerUrl.findOne({ shortenerCode: code })
    //redirect to this original url
    .lean()
    .then(url => {
      if (!url) {
        res.redirect('/')
      }
      res.redirect(url.originalUrl)
    })
    .catch(error => {
      console.log(error)
      res.render('error', { layout: false, errorMessage: error.message })
    })

})

module.exports = router