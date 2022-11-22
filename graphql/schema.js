const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')

const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'Root query type',
  fields: {
    hello: {
      type: GraphQLString,
      description: 'returns a string',
      resolve: () => 'Hello, World'
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType
})

module.exports = schema
