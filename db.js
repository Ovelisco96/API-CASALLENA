import { Sequelize } from 'sequelize'
import userModel from './src/models/User.js'
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.DB_DEPLOY, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
})

userModel(sequelize)

const models = sequelize.models

export { models, sequelize }
