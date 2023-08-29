const { Router } = require('express')
const { signupHandler, getUsersHandler } = require('../handlers/userHandlers')
const { checkApiKey } = require('../middlewares/auth.handler')
const passport = require('passport')

const usersRouter = Router()

usersRouter.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  getUsersHandler
)
usersRouter.post('/signin', signupHandler)
/* usersRouter.post('/login', loginHandler) */

module.exports = usersRouter
