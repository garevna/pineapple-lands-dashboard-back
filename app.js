const express = require('express')
// const path = require('path')
// const logger = require('morgan')
// const history = require('connect-history-api-fallback')

const { auth, content, testimonials } = require('./routes')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.options('/*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,HEADERS,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  res.sendStatus(200)
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})

app.use('/', express.static('public'))

app.use('/images', express.static('storage/images'))
app.use('/avatars', express.static('storage/avatars'))
app.use('/icons', express.static('storage/icons'))

app.use('/auth', auth)
app.use('/content', content)
app.use('/testimonials', testimonials)

/** Catch 404 and return JSON */
app.use((req, res) => res.status(404).json({ message: 'Not Found' }))

/** Error handler */
app.use((err, req, res) => {
  /** Set locals, only providing error in development */
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  /** Render the error page */
  res.status(err.status || 500)
  return res.json({ message: err.message })
})

app.get('/', (req, res) => res.status(200).send('Hello'))

app.listen(3000)

module.exports = app
