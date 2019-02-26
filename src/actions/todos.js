// @flow

import type { ID, TodoContent, TodoStatus, TodosAction } from '../types/todos'

export const createTodo = (content: TodoContent): TodosAction => {
  console.log("actions.createTodo: ", content)
  return {
    type: 'TODO_CREATE',
    note: content.note,
    title: content.title,
    id: (new Date()).getTime(),
  }
}

export const updateTodoStatus = (id: ID, status: TodoStatus): TodosAction => {
  console.log("actions.updateTodoStatus: id=", id)
  return {
    type: 'TODO_UPDATE_STATUS',
    id,
    status
  }
}

export const deleteTodo = (id: ID): TodosAction => {
  console.log("actions.deleteTodo: id=", id)
  return {
    type: 'TODO_DELETE',
    id
  }
}
