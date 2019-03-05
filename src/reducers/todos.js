// @flow

import type { ID, TodoItem, TodoList, TodosAction, TodoStatus } from '../types/todos'

const createTodo = (id: ID, title: string, note?:string): TodoItem => {

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

const initList:TodoList = [{
  id:(new Date()).getTime(),
  content: {
    title:"First task",
    note:"Created automatically"
  },
  status:'approved',
  createdOn: new Date(),
  updatedOn: new Date()
}]

const todos = (state: TodoList = initList, action: TodosAction): TodoList => {
  switch (action.type) {
    case 'TODO_CREATE':
      return [...state, createTodo(action.payload.id, action.payload.title, action.payload.note)]

    case 'TODO_UPDATE_STATUS':
      return changeTodoStatus(state, action.payload.id, action.payload.status)

    case 'TODO_DELETE':
      return removeTodoById(state, action.payload.id)

    default:
      return state
  }
}

export default todos
