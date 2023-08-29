import { Router } from 'express'
import usersRouter from './users.js'
import authRouter from './auth.router.js'

const mainRouter = Router()

mainRouter.use('/users', usersRouter)
mainRouter.use('/auth', authRouter)

export default mainRouter
