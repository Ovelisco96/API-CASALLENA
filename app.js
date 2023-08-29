const express = require('express')
const morgan = require('morgan')
const mainRouter = require('./src/routes')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '50mb' }))
require('./src/utils/auth')
app.use('/', mainRouter)

module.exports = app
