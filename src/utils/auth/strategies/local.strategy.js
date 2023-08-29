import { Strategy } from 'passport-local'
import { unauthorized } from '@hapi/boom'
import { compare } from 'bcrypt'

import { findByEmail } from '../../../controllers/usersControllers.js'

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await findByEmail(email)

      if (!user) {
        done(unauthorized(), false)
      }
      const isMatch = await compare(password, user.password)
      if (!isMatch) {
        done(unauthorized('invalid password').output, false)
      }
      delete user.dataValues.password
      done(null, user)
    } catch (error) {
      done(error, false)
    }
  }
)

export default LocalStrategy
