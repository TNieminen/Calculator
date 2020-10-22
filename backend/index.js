const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const { whitelist, matchOrigin } = require('./utils/whitelist')
const calculusRouter = require('./routes/calculus')

const app = express()

app.use(logger('dev'))
app.use(express.json()) // parses json bodies https://expressjs.com/en/api.html#express.json
app.use(express.urlencoded({ extended: false })) // decodes urlEncoded https://expressjs.com/en/api.html#express.urlencoded
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors({
  credentials: true,
  origin(origin, callback) {
    const whitelistEnv = whitelist[process.env.NODE_ENV] || whitelist.development
    return !origin || matchOrigin(origin, whitelistEnv) ? callback(null, true) : callback(new Error('Not allowed by CORS'))
  },
}))
app.options('*', cors()) // include before other routes
app.use('/calculus', calculusRouter)
app.use('/',(req,res)=>{
  res.sendStatus(200)
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})



// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
