const { badRequestError } = require('../lib')

const { validateToken, uploadImage } = require('../middleware')

const {
  readJSONFromStorage,
  writeJSONToStorage,
  readFolderOfStorage,
  removeFileFromStorage
} = require('../helpers')

class TestimonialsController {
  async getTestimonials (req, res) {
    const { status, message } = await readJSONFromStorage('testimonials.json')
    return res.status(status).send(message)
  }

  async postTestimonials (req, res) {
    if (validateToken(req, res)) {
      const result = await writeJSONToStorage('testimonials.json', req.body)
      return res.status(result.status).send(result.message)
    }
  }

  async uploadAvatar (req, res) {
    if (validateToken(req, res)) {
      try {
        const avatarURL = await uploadImage(req, 'avatars')
        return res.status(200).send(avatarURL)
      } catch (error) {
        console.error(error)
        return badRequestError(res)
      }
    }
  }

  async removeAvatar (req, res) {
    if (validateToken(req, res)) {
      const { status, message } = await removeFileFromStorage(`avatars/${req.params.file}`)
      return res.status(status).send(message)
    }
  }

  async getAllAvatars (req, res) {
    const result = await readFolderOfStorage('avatars')
    return res.status(result.status).send(result.message)
  }
}

module.exports = new TestimonialsController()
