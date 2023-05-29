const ShortenerUrl = require('../models/shortenerUrl')
require('../config/mongoose')

//use nanoID create random code
const { customAlphabet } = require("nanoid")
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const nanoid = customAlphabet(alphabet, 5)


const randomCode = {
  createRandomCode: async function () {
    let newCode = nanoid()

    try {
      //check value is unique or not
      const isDuplicate = await ShortenerUrl.findOne({ shortenerCode: newCode })

      //duplicate,regenerate code
      if (isDuplicate) {
        //also return result when it is unique
        return await this.createRandomCode()
      } else {
        //unique, return value 
        return newCode
      }
    } catch (error) {
      console.log(error)
    }
  },
  findOrCreate: async function (url) {

    try {
      const isInDB = await ShortenerUrl.findOne({ originalUrl: url })

      if (isInDB) {
        return isInDB.shortenerCode
      } else {
        const newCode = await randomCode.createRandomCode()

        const create = await
          ShortenerUrl.create({
            originalUrl: url,
            shortenerCode: newCode
          })

        return newCode
      }

    } catch (error) {
      console.log(error)
    }

  }
}

module.exports = randomCode