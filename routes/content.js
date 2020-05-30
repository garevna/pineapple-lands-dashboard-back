const router = require('express').Router()
// const bodyParser = require('body-parser')
// router.use(bodyParser.json())

/** Controllers */
const { ContentController } = require('../controllers')

/** Routes */
// router.get('/', (req, res) => ContentController.getStartPage(req, res))

router.post('/picture', ContentController.uploadImage)
router.get('/images', ContentController.getAllImages)
router.delete('/images/:file', ContentController.removeImage)

router.post('/icon', ContentController.uploadIcon)
router.get('/icons', ContentController.getAllIcons)
router.delete('/icons/:file', ContentController.removeIcon)

router.get('/:id', ContentController.getPageContent)
router.post('/:id', ContentController.postPageContent)

module.exports = router
