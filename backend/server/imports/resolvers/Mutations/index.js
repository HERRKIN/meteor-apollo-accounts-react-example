import {Resolvers as Auth} from 'meteor/nicolaslopezj:apollo-accounts'
import addTodo from './addTodo'
export default {
  ...Auth(),
  addTodo
}
