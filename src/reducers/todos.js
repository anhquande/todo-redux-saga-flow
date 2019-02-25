// @flow

import type { TodoList, TodoItem, ID, TodoContent, TodoStatus } from '../types/todos'
import type { Action } from '../types'

const createTodo = (id: ID, content: TodoContent): TodoItem => ({
  id,
  content,
  status: 'new',
  createdOn: new Date(),
  updatedOn: new Date()
})

const changeTodoStatus = (todos: TodoList, id: ID, status: TodoStatus): TodoList =>
  todos.map(t => (t.id !== id ? t : { ...t, status }))

const removeTodoById = (todos: TodoList, id:ID) : TodoList => todos.filter(t => t.id !== id)

const todos = (state: TodoList = [], action: Action): TodoList => {
  switch (action.type) {
    case 'TODO_CREATE':
      return [...state, createTodo(action.id, action.content)]
    case 'TODO_UPDATE_STATUS':
      return changeTodoStatus(state, action.id, action.status)
    case 'TODO_DELETE':
      return removeTodoById(state, action.id)
    default:
      return state
  }
}

export default todos
