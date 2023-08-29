const { createUser, getUsers } = require('../controllers/usersControllers')

const signupHandler = async (req, res) => {
  try {
    const newUser = await createUser(req.body)
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const loginHandler = async (req, res) => {
  try {
    const user = req.user
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getUsersHandler = async (req, res) => {
  try {
    const users = await getUsers()
    res.status(200).json(users)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  signupHandler,
  loginHandler,
  getUsersHandler,
}
