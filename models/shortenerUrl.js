const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shortenerUrlSchema = new Schema({
  originalUrl:{
    type: String,
    required: true
  },
  shortenerCode:{
    type: String,
    required: true
  }
})

module.exports = mongoose.model('ShortenerUrl', shortenerUrlSchema)