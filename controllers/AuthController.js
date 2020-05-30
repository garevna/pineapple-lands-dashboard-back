const {
  getCredentials,
  validateCredentials

} = require('../middleware')

const { authError } = require('../lib')

class AuthController {
  async signIn (req, res) {
    await validateCredentials(req, res)
    // if (token) return res.status(200).send(token)
  }

  async validateToken (req, res) {
    const { token } = await getCredentials()
    if (req.headers.authorization !== token) return authError(res)
    return res.status(200).send(token)
  }
}

module.exports = new AuthController()
