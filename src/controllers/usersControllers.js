import { models } from '../../db.js'
import { hashSync } from 'bcrypt'

const createUser = async (data) => {
  let hashedPassword = null
  if (data.password) {
    hashedPassword = hashSync(data.password, 10) // Encripta la contraseña
  }

  const newUser = await models.User.create({
    ...data,
    password: hashedPassword,
  })

  delete newUser.dataValues.password

  return newUser
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
