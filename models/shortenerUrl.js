const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shortenerUrlSchema = new Schema({
  originalUrl:{
    type: String,
    required: [true, 'Empty URL'],
    unique: true
  },
  shortenerCode:{
    type: String,
    required: [true, 'Empty Code'],
    unique: true
  }
})

module.exports = mongoose.model('ShortenerUrl', shortenerUrlSchema)