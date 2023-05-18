//when client use short URL redirect to original URL
const express = require('express')
const router = express.Router()

router.get('/:code', (req, res) => {
  //find original url in mongoDB by "code"

  //redirect to this original url

  res.redirect('https://www.sinya.com.tw/diy')
})

module.exports = router