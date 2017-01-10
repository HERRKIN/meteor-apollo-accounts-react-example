import {Mongo} from 'meteor/mongo'
const Todos = new Mongo.Collection('todos')
const TodosSchema = new SimpleSchema({
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  owner: {
    type: String
  }
})
Todos.attachSchema(TodosSchema)
export default Todos
