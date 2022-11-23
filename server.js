const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./graphql/schema')
const { connectDb } = require('./db')

connectDb()
const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(3000)
console.log('Server is running on port 3000')
