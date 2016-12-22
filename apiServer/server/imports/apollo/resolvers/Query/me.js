import {Meteor} from 'meteor/meteor'
export default function (root, args, context) {
  console.log(context)
  if (!context.userId) {
    throw new Error('Unknown User (not logged in)')
  }
  return Meteor.users.findOne(context.userId)

  // no tiene todos las variables del user
  // return context.user
}
