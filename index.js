import app from './app.js'
import { sequelize as conn } from './db.js'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 3001

conn
  .sync({ altern: true })
  .then(() => {
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server corriendo en el puerto ${port}`)
    })
  })
  .catch((err) => console.log(err))
