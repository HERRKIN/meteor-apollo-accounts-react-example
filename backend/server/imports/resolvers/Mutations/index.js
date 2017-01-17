import {Resolvers as Auth} from 'meteor/nicolaslopezj:apollo-accounts'
import addTodo from './addTodo'
import toggleCompleted from './toggleCompleted'
export default {
  ...Auth(),
  addTodo,
  toggleCompleted
}
