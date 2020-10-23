const createError = require('http-errors')
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const { whitelist, matchOrigin } = require('./utils/whitelist')
const response = require('./utils/response')
const calculusRouter = require('./routes/calculus')

const { NODE_ENV } = process.env

/**
 * ANCHOR App Setup
 */
const app = express()
app.use(express.json()) // parses json bodies https://expressjs.com/en/api.html#express.json
app.use(express.urlencoded({ extended: false })) // decodes urlEncoded https://expressjs.com/en/api.html#express.urlencoded
app.use(cors({
  // credentials: true,
  origin(origin, callback) {
    const whitelistEnv = whitelist[NODE_ENV] || whitelist.development
    return !origin || matchOrigin(origin, whitelistEnv) ? callback(null, true) : callback(new Error('Not allowed by CORS'))
  },
}))
app.options('*', cors()) // include before route
switch (NODE_ENV) {
  case 'production':
    app.use(logger('tiny'))
    break
  case 'staging':
    app.use(logger('common'))
    break
  case 'test':
    break
  default:
    app.use(logger('dev'))
    break
}

/**
 * ANCHOR Routes
 */
app.use('/calculus', calculusRouter)


/**
 * ANCHOR Request handlers
 */
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res) => {
  res.status(err.status || 500).send(response.error(err.message))
})

module.exports = app