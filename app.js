/* import morgan from 'morgan' */
import pkg from 'body-parser'
import express from 'express'
import passport from 'passport'
import mainRouter from './src/routes/index.js'
import LocalStrategy from './src/utils/auth/strategies/local.strategy.js'
import JwtStrategy from './src/utils/auth/strategies/jwt.strategy.js'

const app = express()
const { json } = pkg
const port = process.env.PORT || 3000

passport.use(LocalStrategy)
passport.use(JwtStrategy)

/* app.use(morgan('dev')) */
app.use(json({ limit: '50mb' }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})
app.use('/', mainRouter)

export default app
