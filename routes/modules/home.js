const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  //check this url wether in DB or not

  //yes, return existing code for user

  //no, generate new code for user and save it in DB 
  res.render('index')
})

module.exports = router