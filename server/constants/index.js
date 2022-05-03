const ORIGIN = '*'
const PORT = 8080
// process.env.PORT || 8080
// for "atlas" edit MONGO_URI in -> .env file || for "community server" edit <MyDatabase>
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://kenny:kenny@pommodores0.cl4ks.mongodb.net/Pommodores?retryWrites=true&w=majority'
const MONGO_OPTIONS = {}

const JWT_SECRET = process.env.JWT_SECRET || 'unsafe_secret'

module.exports = {
  ORIGIN,
  PORT,
  MONGO_URI,
  MONGO_OPTIONS,
  JWT_SECRET,
}
