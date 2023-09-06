import { Sequelize } from 'sequelize'
import userModel from './src/models/User.js'
import dotenv from 'dotenv'
dotenv.config()
const { DB_USER, DB_PASSWORD, DB_PORT, DB_NAME, DB_HOST } = process.env
const USER = encodeURIComponent(DB_USER)
const PASSWORD = encodeURIComponent(DB_PASSWORD)
const URI = `postgres://${USER}:${PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`

const sequelize = new Sequelize(URI, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
})

userModel(sequelize)

const models = sequelize.models

export { models, sequelize }
