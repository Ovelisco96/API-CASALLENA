import app from './app.js'
import { sequelize as conn } from './db.js'
const port = process.env.PORT || 3001
import 'dotenv/config'

conn
  .sync({ altern: true })
  .then(() => {
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server corriendo en el puerto ${port}`)
    })
  })
  .catch((err) => console.log(err))
