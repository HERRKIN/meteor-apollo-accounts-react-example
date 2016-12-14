import User from './User.graphql'
import Query from './Query.graphql'
import {SchemaTypes as Auth} from 'meteor/nicolaslopezj:apollo-accounts'
import Mutation from './Mutation'
export default [
  Auth(),
  User,
  Query,
  Mutation
]
