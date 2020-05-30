const crypto = require('cryptico')
const { badRequestError, decodeError } = require('../lib')

const { decodeKey } = require('../config')

module.exports = (req, res) => {
  if (!req.body.login || !req.body.password) return badRequestError(res)
  const $login = crypto.decrypt(req.body.login, decodeKey)
  const $password = crypto.decrypt(req.body.password, decodeKey)
  if ($login.status !== 'success' || $password.status !== 'success') return decodeError(res)
  return {
    login: $login.plaintext,
    password: $password.plaintext
  }
}
