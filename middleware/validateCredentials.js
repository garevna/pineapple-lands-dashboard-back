const { writeJSONToStorage } = require('../helpers')
const { authError, authServiceError, generateToken } = require('../lib')
const getCredentials = require('./getCredentials.js')
const decodeCredentials = require('./decodeCredentials.js')

module.exports = async (req, res) => {
  const template = await getCredentials(req, res)
  const credentials = decodeCredentials(req, res)

  if (template && credentials) {
    if (template.login !== credentials.login || template.password !== credentials.password) return authError(res)

    const token = generateToken(req, res)
    if (!token) return authServiceError()
    const { status } = await writeJSONToStorage('credentials.json', {
      login: credentials.login,
      password: credentials.password,
      token
    })
    if (status !== 200) return authServiceError(res)
    return res.status(200).send(token)
  }
  return authServiceError(res)
}
