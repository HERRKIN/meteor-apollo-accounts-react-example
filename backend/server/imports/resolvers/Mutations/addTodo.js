import {Todos} from '../../../../lib/Collections'

export default function (root, options, context) {
  if (!context.userId) {
    throw new Error('Unknown User (not logged in)')
  }

  console.log(context)
  const newTodo = {
    text: options.text,
    completed: false,
    owner: context.userId
  }
  const TodoId = Todos.insert(newTodo)
  if (TodoId) {
    // log the id so we know the todo was inserted correctly
    const todo = {_id: TodoId, ...newTodo}
    console.log(todo)
    return todo // return the todo
  }
}
