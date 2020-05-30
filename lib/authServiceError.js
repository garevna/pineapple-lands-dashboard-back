module.exports = function authServiceError (res) {
  res.status(500).send('Auth service is not accessible')
  return false
}
