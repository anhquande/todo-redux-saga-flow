// @flow

import { createSelector } from 'reselect'

import type { State } from '../types'
import type { VisibilityFilter } from '../types/visibilityFilter'
import type { TodoList } from '../types/todos'

const todosSelector = (state: State) => state.todos
const visibilityFilterSelector = (state: State) => state.visibilityFilter

export const visibleTodosSelector = createSelector(
  todosSelector,
  visibilityFilterSelector,
  (todos: TodoList, visibilityFilter: VisibilityFilter) => {
    console.log("[visibleTodosSelector] visibilityFilter=, todos=",visibilityFilter, todos )
    switch (visibilityFilter) {
      case 'SHOW_NEW':
        return todos.filter(t => t.status === 'new')

      case 'SHOW_TODO':
        return todos.filter(todo => todo.status === 'todo')

      case 'SHOW_IN_PROGRESS':
        return todos.filter(t => t.status === 'in progress')

      case 'SHOW_DONE':
        return todos.filter(t => t.status === 'done')

      case 'SHOW_APPROVED':
        return todos.filter(t => t.status === 'approved')

      case 'SHOW_ALL':
      default:
        return todos
    }
  }
)
