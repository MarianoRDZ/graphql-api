const { GraphQLSchema, GraphQLObjectType } = require('graphql')
const { hello } = require('./queries')
const { register, login } = require('./mutations')

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'Root query type',
  fields: {
    hello
  }
})

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'The Root mutation type',
  fields: {
    register,
    login
  }
})

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
})
