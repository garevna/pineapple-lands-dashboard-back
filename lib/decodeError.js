module.exports = function decodeError (res) {
  res.status(422).send('Bad credentials')
  return false
}
