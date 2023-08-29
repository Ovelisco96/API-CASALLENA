const { Router } = require('express')
const usersRouter = require('./users')
const authRouter = require('./auth.router')

const mainRouter = Router()

mainRouter.use('/users', usersRouter)
mainRouter.use('/auth', authRouter)

module.exports = mainRouter
