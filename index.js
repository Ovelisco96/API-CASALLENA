require('dotenv').config()
const app = require('./app.js')
const { conn } = require('./db.js')
const port = process.env.PORT || 3001

conn
  .sync({ altern: true })
  .then(() => {
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server corriendo en el puerto ${port}`)
    })
  })
  .catch((err) => console.log(err))
