import { Sequelize } from 'sequelize'
const { DB_DEPLOY } = process.env
import userModel from './src/models/User.js'
import 'dotenv/config'

const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
})

userModel(sequelize)

const models = sequelize.models

export { models, sequelize }
