import {SchemaMutations as Auth} from 'meteor/nicolaslopezj:apollo-accounts'
import addTodo from './addTodo.graphql'
export default `
type Mutation {
 ${Auth()}
 ${addTodo}
}
`
