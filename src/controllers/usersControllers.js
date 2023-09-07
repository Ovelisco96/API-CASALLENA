import { models } from '../../db.js'
import { hashSync } from 'bcrypt'
import pkg from 'jsonwebtoken'
import config from '../config/config.js'
const { sign } = pkg

const createUser = async (data) => {
  let hashedPassword = null
  if (data.password) {
    hashedPassword = hashSync(data.password, 10) // Encripta la contraseña
  }

  const payload = {
    sub: data.id,
    mail: data.mail,
  }
  const token = sign(payload, config.jwtSecret)

  const newUser = await models.User.create({
    ...data,
    password: hashedPassword,
  })

  delete newUser.dataValues.password

  return { newUser, token }
}

const findByEmail = async (email) => {
  const rta = await models.User.findOne({
    where: { email },
  })
  return rta
}

const getUsers = async () => {
  const rta = await models.User.findAll()
  return rta
}

export { createUser, findByEmail, getUsers }
