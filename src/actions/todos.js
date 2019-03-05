// @flow

import type { ID, TodoContent, TodoStatus, TodosAction } from '../types/todos'

export const createTodo = (content: TodoContent): TodosAction => {
  return {
    type: "TODO_CREATE",
    payload: {
      note: content.note,
      title: content.title,
      id: (new Date()).getTime(),
    }
  }
}

export const updateTodoStatus = (id: ID, status: TodoStatus): TodosAction => {
  return {
    type: "TODO_UPDATE_STATUS",
    payload: {
      id,
      status,
    }
  }
}

export const deleteTodo = (id: ID): TodosAction => {
  return {
    type: "TODO_DELETE",
    payload: {
      id
    }
  }
}
