const { GraphQLString } = require('graphql')
const { User } = require('../models')
const { generateJWT } = require('../util/auth')

const register = {
  type: GraphQLString,
  description: 'Registers a new User and returns a JWT token',
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

    const user = new User({ username, email, password, displayName })
    await user.save()

    const JWT = generateJWT({
      _id: user._id,
      username: user.username,
      email: user.email,
      displayName: user.displayName
    })

    return JWT
  }
}

const login = {
  type: GraphQLString,
  description: 'Logs a user and returns a session token',
  args: {
    email: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    }
  },
  async resolve (_, args) {
    const { email, password } = args
    const user = await User.findOne({ email }).select('+password')

    if (!user || password !== user.password) {
      throw new Error('Invalid username or password')
    }

    const JWT = generateJWT({
      _id: user._id,
      username: user.username,
      email: user.email,
      displayName: user.displayName
    })
    return JWT
  }
}

module.exports = { register, login }
