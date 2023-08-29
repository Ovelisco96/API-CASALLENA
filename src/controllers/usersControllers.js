const { User } = require('../../db')
const bcrypt = require('bcrypt')

const createUser = async (data) => {
  let hashedPassword = null
  if (data.password) {
    hashedPassword = bcrypt.hashSync(data.password, 10) // Encripta la contraseña
  }

  const newUser = await User.create({
    ...data,
    password: hashedPassword,
  })

  delete newUser.dataValues.password

  return newUser
}

const findByEmail = async (mail) => {
  const rta = await User.findOne({
    where: { mail },
  })
  return rta
}

const getUsers = async () => {
  const rta = await User.findAll()
  return rta
}

module.exports = { createUser, findByEmail, getUsers }
