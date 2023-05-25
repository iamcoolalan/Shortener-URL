const express = require('express')
const router = express.Router()

const ShortenerUrl = require('../../models/shortenerUrl')

router.get('/', (req,res) => [
  ShortenerUrl.find()
    .sort({ _id: -1 })
    .lean()
    .then(histories => {
      res.render('history', { histories })
    })
    .catch(error => {
      console.log(error)
    })
])


module.exports = router