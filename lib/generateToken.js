const crypto = require('cryptico')

const { encodeKey } = require('../config')

module.exports = (login, password) => {
  const encrypted = crypto.encrypt(`${login}.${password}.${Date.now()}`, encodeKey)
  return encrypted.cipher
}
