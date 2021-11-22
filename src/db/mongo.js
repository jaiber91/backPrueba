const mongoose = require('mongoose')

/*const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } = process.env*/
const url = 'mongodb+srv://agora:agora1234@cluster0.so6wa.mongodb.net/fullAuth'

/*const connectionString = NODE_ENV === 'test'
  ? MONGO_DB_URI_TEST
  : MONGO_DB_URI

if (!connectionString) {
  console.error('Recuerda que tienes que tener un archivo .env con las variables de entorno definidas y el MONGO_DB_URI que servirá de connection string. En las clases usamos MongoDB Atlas pero puedes usar cualquier base de datos de MongoDB (local incluso).')
}*/

// Conection a mongoDB
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Database connected')
  }).catch(err => {
    console.log(err)
  })

process.on('uncaughtException', error => {
  console.error(error)
  mongoose.disconnect()
})
