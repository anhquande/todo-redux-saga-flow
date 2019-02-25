// @flow

import type { ID, TodoContent, TodoStatus, TodosAction } from '../types/todos'

let nextTodoId: ID = 0

export const addTodo = (content: TodoContent): TodosAction => {
  nextTodoId += 1
  console.log("actions.addTodo: ",content)
  return {
    type: 'TODO_CREATE',
    id: nextTodoId,
    content
  }
}

export const updateTodoStatus = (id:ID, status: TodoStatus): TodosAction => {
  console.log("actions.updateTodoStatus: id=",id)
  return {
    type: 'TODO_UPDATE_STATUS',
    id,
    status
  }
}

export const deleteTodo = (id:ID): TodosAction => {
  console.log("actions.deleteTodo: id=",id)
  return {
    type: 'TODO_DELETE',
    id
  }
}
