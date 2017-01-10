import User from './User.graphql'
import Todo from './Todo.graphql'
import Query from './Query.graphql'
import {SchemaTypes as Auth} from 'meteor/nicolaslopezj:apollo-accounts'
import Mutation from './Mutation'
export default [
  Auth({
    CreateUserProfileInput: `
      name: String
    `
  }),
  User,
  Todo,
  Query,
  Mutation
]
