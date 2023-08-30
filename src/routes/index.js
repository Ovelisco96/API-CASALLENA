import { Router } from 'express'
import usersRouter from './users.js'
import authRouter from './auth.router.js'
import html from '../utils/html/welcome.js'

const mainRouter = Router()

mainRouter.use('/users', usersRouter)
mainRouter.use('/auth', authRouter)
mainRouter.use('/', (req, res) => res.type('html').send(html))

export default mainRouter
