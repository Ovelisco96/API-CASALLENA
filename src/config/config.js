import dotenv from 'dotenv'
import path from 'path'
dotenv.config({
  path: path.resolve('./', process.env.NODE_ENV + '.env'),
})

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  dbUrl: process.env.DB_URL,
}

export default config
