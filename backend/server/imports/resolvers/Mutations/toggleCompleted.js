import {Todos} from '../../../../lib/Collections'
export default function (root, options, context) {
  console.log(options)
  if (!context.userId) {
    throw new Error('Unknown User (not logged in)')
  }

  // find the todo of the logged in user
  const todo = Todos.findOne({$and: [{_id: options.todoId}, {owner: context.userId}]})
  // if not found throw Error
  if (!todo) {
    throw new Error('Todo not found on the user')
  }

  const todoId = Todos.update(todo._id, {$set: {completed: !todo.completed}})
  if (todoId) {
    todo.completed = !todo.completed
    console.log(todo)
    return todo // return the todo
  }
}
