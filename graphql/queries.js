const { GraphQLString } = require('graphql')

const hello = {
  type: GraphQLString,
  description: 'returns a string',
  resolve: () => 'Hello, World'
}

module.exports = { hello }
