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

  return Object.assign({}, newTodo)
}

const changeTodoStatus = (todos: TodoList, id: ID, status: TodoStatus): TodoList =>{
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
  switch (action.type) {
    case 'TODO_CREATE':
      return [...state, createTodo(action.id, action.title, action.note)]

    case 'TODO_UPDATE_STATUS':
      return changeTodoStatus(state, action.id, action.status)

    case 'TODO_DELETE':
      return removeTodoById(state, action.id)

    default:
      return state
  }
}

export default todos
