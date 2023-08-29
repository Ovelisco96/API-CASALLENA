const { Strategy } = require('passport-local')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')

const { findByEmail } = require('../../../controllers/usersControllers')

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await findByEmail(email)

      if (!user) {
        done(boom.unauthorized(), false)
      }
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        console.log('aquii')
        done(boom.unauthorized('invalid password').output, false)
      }
      delete user.dataValues.password
      done(null, user)
    } catch (error) {
      done(error, false)
    }
  }
)

module.exports = LocalStrategy
