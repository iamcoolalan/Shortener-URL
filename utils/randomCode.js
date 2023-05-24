const ShortenerUrl = require('../models/shortenerUrl')
require('../config/mongoose')

//use nanoID create random code
const { customAlphabet } = require("nanoid")
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const nanoid = customAlphabet(alphabet, 5)


const randomCode = {
  creatRandomCode: async function() {
    let newCode = nanoid()
    try {
      //check value is unique or not
      const isDuplicate = await ShortenerUrl.findOne({ shortenerCode: newCode })

      //duplicate,regenerate code
      if (isDuplicate) {
        creatRandomCode()
      } else {
      //unique, return value  
        return newCode
      }
    } catch (error) {
      console.log(error)
    }
  }
} 


module.exports = randomCode