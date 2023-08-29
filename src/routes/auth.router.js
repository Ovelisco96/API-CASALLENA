import passport from 'passport'
import { Router } from 'express'
import { authHandler } from '../handlers/authHandlers.js'

const authRouter = Router()

authRouter.post(
  '/login',
  passport.authenticate('local', { session: false }),
  authHandler
)

export default authRouter
