import {Todos} from '../../../../lib/Collections'

export default {
  User: {
    todos (user) {
      console.log(user, 'UserResolver')
      return Todos.find({owner: user._id}).fetch()
    }
  }
}
