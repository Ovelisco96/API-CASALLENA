const { config } = require('../config/config')
const jwt = require('jsonwebtoken')

const authHandler = async (req, res, next) => {
  try {
    const user = req.user
    const payload = {
      sub: user.id,
      mail: user.mail,
    }
    const token = jwt.sign(payload, config.jwtSecret)
    res.json({
      user,
      token,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = { authHandler }
