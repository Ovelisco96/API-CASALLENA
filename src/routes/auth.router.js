const express = require('express')
const passport = require('passport')
const { authHandler } = require('../handlers/authHandlers')

const authRouter = express.Router()

authRouter.post(
  '/login',
  passport.authenticate('local', { session: false }),
  authHandler
)

module.exports = authRouter
