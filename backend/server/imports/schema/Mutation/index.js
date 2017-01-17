import {SchemaMutations as Auth} from 'meteor/nicolaslopezj:apollo-accounts'
import addTodo from './addTodo.graphql'
import toggleCompleted from './toggleCompleted.graphql'
export default `
type Mutation {
 ${Auth()}
 ${addTodo}
 ${toggleCompleted}
}
`
