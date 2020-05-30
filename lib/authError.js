module.exports = function authError (res) {
  res.status(401).send('Auth fails')
  return false
}
