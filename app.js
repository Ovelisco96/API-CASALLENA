import morgan from 'morgan'
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

app.use(morgan('dev'))
app.use(json({ limit: '50mb' }))
app.use('/', mainRouter)

export default app
