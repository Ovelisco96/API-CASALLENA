import config from '../config/config.js'
import pkg from 'jsonwebtoken'
const { sign } = pkg

const authHandler = async (req, res, next) => {
  try {
    const user = req.user
    const payload = {
      sub: user.id,
      mail: user.mail,
    }
    const token = sign(payload, config.jwtSecret)
    res.json({
      user,
      token,
    })
  } catch (error) {
    next(error)
  }
}

export { authHandler }
