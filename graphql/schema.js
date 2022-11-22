const { GraphQLSchema, GraphQLObjectType } = require('graphql')
const { hello } = require('./queries')

const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'Root query type',
  fields: {
    hello
  }
})

module.exports = new GraphQLSchema({
  query: queryType
})
