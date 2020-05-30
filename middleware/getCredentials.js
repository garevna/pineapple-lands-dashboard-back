const { readJSONFromStorage } = require('../helpers')
const { authServiceError } = require('../lib')

module.exports = async (req, res) => {
  const { status, message } = await readJSONFromStorage('credentials.json')

  if (status !== 200) return authServiceError(res)
  return JSON.parse(message)
}
