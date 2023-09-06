import { createUser, getUsers } from '../controllers/usersControllers.js'

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
  console.log('auquu')
  try {
    const users = await getUsers()
    console.log(
      '🚀 ~ file: userHandlers.js:25 ~ getUsersHandler ~ users:',
      users
    )
    res.status(200).json(users)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export { signupHandler, loginHandler, getUsersHandler }
