class HomeController {
  async index (req, res) {
    return res.json({ message: 'api' })
  }
}

module.exports = HomeController
