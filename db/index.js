const mongoose = require('mongoose')
require('dotenv').config()

const USERNAME = process.env.MONGODB_USERNAME
const PASSWORD = process.env.MONGODB_PASSWORD

const connectDb = async () => {
  await mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.i6cr03m.mongodb.net/test`)
  console.log('MongoDB connection established')
}

module.exports = { connectDb }
