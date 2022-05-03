require('dotenv').config() // Secures variables
const app = require('./utils/app') // Backend App (server)
const mongo = require('./utils/mongo') // MongoDB (database)
const {PORT} = require('./constants')
const authRoutes = require('./routes/auth')

async function bootstrap() {
  await mongo.connect()

  app.use(express.static('client/build'));
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+"../client/build/index.html"));
   });
  app.get('/healthz', (req, res) => res.status(200).send())
  app.use('/auth', authRoutes)

  app.listen(PORT, () => {
    console.log(`✅ Server is listening on port: ${PORT}`)
  })
}

bootstrap()
