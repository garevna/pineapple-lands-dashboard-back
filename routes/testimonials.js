const router = require('express').Router()

/** Controllers */
const { TestimonialsController } = require('../controllers')

/** Routes */
router.get('/', TestimonialsController.getTestimonials)
router.post('/', TestimonialsController.postTestimonials)

router.post('/avatar', TestimonialsController.uploadAvatar)
router.delete('/avatars/:file', TestimonialsController.removeAvatar)

router.get('/avatars', TestimonialsController.getAllAvatars)

module.exports = router
