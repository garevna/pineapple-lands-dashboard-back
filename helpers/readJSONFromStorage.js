const fs = require('fs-extra')

module.exports = async (file) => {
  if (await fs.exists(`./storage/${file}`)) {
    try {
      const content = await fs.readJson(`./storage/${file}`)
      return { status: 200, message: JSON.stringify(content) }
    } catch (err) { return { status: 500, message: err.stack } }
  }

  return { status: 500, message: `File ${file} doesn't exist` }
}
