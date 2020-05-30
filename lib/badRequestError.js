module.exports = function badRequest (res) {
  res.status(400).send('Bad request')
  return false
}
