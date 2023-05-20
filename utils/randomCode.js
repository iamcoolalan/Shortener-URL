const ShortenerUrl = require('../models/shortenerUrl')
const db = require('../config/mongoose')

const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseAlphabet = lowerCaseAlphabet.toUpperCase()
const number = '1234567890'

const index = 
lowerCaseAlphabet.split('')
.concat(upperCaseAlphabet.split(''))
.concat(number.split(''))


const randomCode = {
  generateRandomCode: function() {
    let code = ''

    for (let i = 0; i < 5; i++) {
      code += index[Math.floor(Math.random() * index.length)]
    }

    isDuplicate(code)

    return code
  },
}

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