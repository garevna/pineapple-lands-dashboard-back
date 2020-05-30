const crypto = require('cryptico')

const { decodeKey } = require('../config')

const { decodeError } = require('../lib')

module.exports = async (login, password) => {
  const $login = crypto.decrypt(login, decodeKey)
  const $password = crypto.decrypt(password, decodeKey)
  if ($login.status !== 'success' || $password.status !== 'success') return decodeError()
  return {
    status: 200,
    message: {
      login: $login.plaintext,
      password: $password.plaintext
    }
  }
}
