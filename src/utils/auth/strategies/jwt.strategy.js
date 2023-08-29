const { Strategy, ExtractJwt } = require('passport-jwt')

const { config } = require('../../../config/config')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
}

const JwtStrategy = new Strategy(options, (payload, done) => {
  console.log('🚀 ~ file: jwt.strategy.js:11 ~ JwtStrategy ~ payload:', payload)
  return done(null, payload)
})

module.exports = JwtStrategy
