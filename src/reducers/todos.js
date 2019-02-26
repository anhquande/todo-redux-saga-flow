// @flow

import type { ID, TodoItem, TodoList, TodoStatus } from '../types/todos'
import type { Action } from '../types'

const createTodo = (id: ID, title: string, note: string): TodoItem => {

  const newTodo = {
    id,
    content: {
      title,
      note,
    },
    status: 'new',
    createdOn: new Date(),
    updatedOn: new Date()
  }

  console.log('newTodoItem is created: ', newTodo)
  return Object.assign({}, newTodo)
}

const changeTodoStatus = (todos: TodoList, id: ID, status: TodoStatus): TodoList =>{
  console.log("reducer.changeTodoStatus: id=",id, status)
  return   todos.map(t => (t.id !== id ? t : { ...t, status }))
}

const removeTodoById = (todos: TodoList, id: ID): TodoList => todos.filter(t => t.id !== id)

const initList:TodoItem = [{
  id:(new Date()).getTime(),
  content: {
    title:'First task',
    content:'Created automatically'
  },
  status:'approved',
  createdOn: new Date(),
  updatedOn: new Date()
}]

const todos = (state: TodoList = initList, action: Action): TodoList => {
  console.log('reducer.todos: action=', action)
  switch (action.type) {
    case 'TODO_CREATE':
      const newState = [...state, createTodo(action.id, action.title, action.note)]
      console.log('reducer.TODO_CREATE: oldState =', state)
      console.log('reducer.TODO_CREATE: newState =', newState)
      return newState

    case 'TODO_UPDATE_STATUS':
      const newState2 = changeTodoStatus(state, action.id, action.status)
      console.log('reducer.TODO_UPDATE_STATUS: oldState =', state)
      console.log('reducer.TODO_UPDATE_STATUS: newState =', newState2)
      return newState2

    case 'TODO_DELETE':
      const newState3 = removeTodoById(state, action.id)
      console.log('reducer.TODO_DELETE: oldState =', state)
      console.log('reducer.TODO_DELETE: newState =', newState3)
      return newState3

    default:
      console.log('reducer.DEFAULT: newState is not changed =', state)
      return state
  }
}

export default todos
