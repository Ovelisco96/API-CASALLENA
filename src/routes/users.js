import { Router } from 'express'
import { signupHandler, getUsersHandler } from '../handlers/userHandlers.js'
import checkApiKey from '../middlewares/auth.handler.js'
import passport from 'passport'

const usersRouter = Router()

usersRouter.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  getUsersHandler
)
usersRouter.post('/signin', signupHandler)
/* usersRouter.post('/login', loginHandler) */

export default usersRouter
