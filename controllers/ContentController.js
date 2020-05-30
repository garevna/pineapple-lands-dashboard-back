const { uploadImage } = require('../middleware')

const {
  removeFileFromStorage,
  readJSONFromStorage,
  writeJSONToStorage,
  readFolderOfStorage

} = require('../helpers')

const { validateToken } = require('../middleware')

/* eslint-disable no-console */

class ContentController {
  async getPageContent (req, res) {
    const { status, message } = await readJSONFromStorage(`land-${req.params.id}.json`)
    return res.status(status).send(message)
  }

  async postPageContent (req, res) {
    if (validateToken(req, res)) {
      const result = await writeJSONToStorage(`land-${req.params.id}.json`, req.body)
      return res.status(result.status).send(result.message)
    }
    return null
  }

  async uploadImage (req, res) {
    if (validateToken(req, res)) {
      try {
        const imageURL = await uploadImage(req, 'images')
        return res.status(200).send(imageURL)
      } catch (error) { return { status: 500, message: error.stack } }
    }
    return null
  }

  async removeImage (req, res) {
    if (validateToken(req, res)) {
      const result = await removeFileFromStorage(`images/${req.params.file}`)
      return res.status(result.status).send(result.message)
    }
    return null
  }

  async getAllImages (req, res) {
    const result = await readFolderOfStorage('images')
    return res.status(result.status).send(result.message)
  }

  async uploadIcon (req, res) {
    if (validateToken(req, res)) {
      try {
        const imageURL = await uploadImage(req, 'icons')
        return res.status(200).send(imageURL)
      } catch (error) {
        return {
          status: 500,
          message: error.stack
        }
      }
    }
    return null
  }

  async removeIcon (req, res) {
    if (validateToken(req, res)) {
      const result = await removeFileFromStorage(`icons/${req.params.file}`)
      return res.status(result.status).send(result.message)
    }
    return null
  }

  async getAllIcons (req, res) {
    const result = await readFolderOfStorage('icons')
    return res.status(result.status).send(result.message)
  }

  // async getLargeFile (req, res) {
  //   console.log('GET LARGE FILE:\n', req.path, req.params.file)
  //   await readStreamFromStorage(res, `images/large/${req.params.file}`)
  // }
  // async postLargeFile (req, res) {
  //   console.log('POST LARGE FILE:\n', req.path, req.params.file)
  //   await writeStreamToStorage(req, res, `images/large/${req.params.file}`)
  // }
}

module.exports = new ContentController()
