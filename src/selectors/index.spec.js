import { visibleTodosSelector } from './index'
import type { State } from '../types'

describe('visibleTodosSelector', () => {
  let state: State

  beforeEach(() => {
    state = {
      todos: [
        { id: 0, content: {title: "Test Todo 1"}, status: "new" },
        { id: 1, content: {title: "Test Todo 2"}, status: "done" }
      ],
      visibilityFilter: "SHOW_ALL"
    }
  })

  test("should handle SHOW_ALL", () => {
    expect(visibleTodosSelector(state)).toEqual([
      { id: 0, content: {title: "Test Todo 1"}, status: "new" },
      { id: 1, content: {title: "Test Todo 2"}, status: "done" }
    ])
  })

  test("should handle SHOW_ACTIVE", () => {
    state.visibilityFilter = "SHOW_NEW"
    expect(visibleTodosSelector(state)).toEqual([
      { id: 0, content: {title: "Test Todo 1"}, status: "new" },
    ])
  })

  test("should handle SHOW_COMPLETED", () => {
    state.visibilityFilter = "SHOW_DONE"
    expect(visibleTodosSelector(state)).toEqual([
      { id: 1, content: {title: "Test Todo 2"}, status: "done" }
    ])
  })
})
