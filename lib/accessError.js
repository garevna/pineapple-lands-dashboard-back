module.exports = function accessError (res) {
  res.status(403).send('Access denied')
  return false
}
