const mongoose = require('mongoose')
require('dotenv').config()

console.log(process.env.MONGODB_PASSWORD)

const USERNAME = process.env.MONGODB_USERNAME
const PASSWORD = process.env.MONGODB_PASSWORD

const connectDb = async () => {
  console.log('Trying to connect')
  await mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.i6cr03m.mongodb.net/test`)
  console.log('Connected!')
}

module.exports = { connectDb }
