const { GraphQLString } = require('graphql')
const { User } = require('../models')

const register = {
  type: GraphQLString,
  description: 'Registers a new User',
  args: {
    username: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    },
    displayName: {
      type: GraphQLString
    }
  },
  async resolve (_, args) {
    const { username, email, password, displayName } = args

    const newUser = await User.create({ username, email, password, displayName })
    console.log(newUser)
    return 'New user created!'
  }
}

module.exports = { register }
