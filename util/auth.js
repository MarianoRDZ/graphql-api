const jwt = require('jsonwebtoken')

const generateJWT = (user) => {
  return jwt.sign({ user }, 'secret', {
    expiresIn: '8h'
  })
}

module.exports = { generateJWT }
