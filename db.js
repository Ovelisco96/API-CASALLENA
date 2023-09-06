import path from 'path'
import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'
import config from './src/config/config.js'
import userModel from './src/models/User.js'
dotenv.config({
  path: path.resolve('./', process.env.NODE_ENV + '.env'),
})

const sequelize = new Sequelize(config.dbUrl, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
})

userModel(sequelize)

const models = sequelize.models

export { models, sequelize }
