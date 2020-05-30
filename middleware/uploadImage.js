const formidable = require('formidable')

module.exports = (req, folder) => new Promise((resolve, reject) => {
  new formidable.IncomingForm().parse(req)
    .on('fileBegin', (name, file) => {
      file.path = `./storage/${folder}/${file.name}`
    })
    .on('file', (name, file) => resolve(`https://${req.hostname}${file.path.slice(9)}`))
    .on('error', (error) => reject(error))
})
