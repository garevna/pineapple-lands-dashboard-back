const dotenv = require('dotenv')
const crypto = require('cryptico')

dotenv.config()

const secret = process.env.SECRET

const decodeKey = crypto.generateRSAKey(secret, 1024)
const encodeKey = crypto.publicKeyString(decodeKey)

module.exports = {
  encodeKey,
  decodeKey,
  admin: process.env.GENERAL_ADMIN_NAME,
  adminPass: process.env.GENERAL_ADMIN_PASS,
  login: process.env.LOGIN,
  password: process.env.PASSWORD,
  token: process.env.TOKEN
}
