const ShortenerUrl = require('../models/shortenerUrl')
const db = require('../config/mongoose')

//use nanoID create random code
const { customAlphabet } = require("nanoid")
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const nanoid = customAlphabet(alphabet, 5)


let randomCode = nanoid()


/*function isDuplicate(checkingCode, objectCode){

  ShortenerUrl.findOne({ shortenerCode: checkingCode })
      .then(url => {
        if (url) {
          objectCode = randomCode.generateRandomCode()
          isDuplicate(objectCode, objectCode)
        }
      })
      .catch(error => {
        reject(error);
      });

    //check db already have the code or not

    //yes regenerate code

    //no return code

}*/


module.exports = randomCode