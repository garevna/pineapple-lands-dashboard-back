const { authError, authServiceError } = require('../lib')
const { readJSONFromStorage } = require('../helpers')

module.exports = async (req, res) => {
  const { status, message } = await readJSONFromStorage('credentials.json')
  if (status !== 200) return authServiceError(res)
  const { token } = JSON.parse(message)
  if (req.headers.authorization !== token) return authError(res)
  return true
}
