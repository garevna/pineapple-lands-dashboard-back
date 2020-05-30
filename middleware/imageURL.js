module.exports = (req, fileName, folder) => `https://${req.hostname}/${folder}/${fileName || 'default.png'}`
