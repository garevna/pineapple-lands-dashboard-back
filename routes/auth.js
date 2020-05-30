const router = require('express').Router()

const { AuthController } = require('../controllers')

/* sign in */
router.post('/', AuthController.signIn)
/* auth by token */
router.get('/token', AuthController.validateToken)

// router.post('/credentials', (req, res) => AuthController.addCredentials(req, res))
// router.delete('/delete', (req, res) => AuthController.removeCredentials(req, res))

module.exports = router
