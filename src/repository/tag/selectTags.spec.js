import { getVisibleTags } from './selectors'
import type { TagsState } from './types'

describe('getVisibleTags', () => {
  let state: TagsState

  beforeEach(() => {
    state = {
      tags: [
        { id: 1, name: "Tag 1", usages: 0 },
        { id: 2, name: "Tag 2", usages: 0 },
        { id: 3, name: "Tag 3", usages: 2 },
      ],
      filter: 'SHOW_ALL'
    }
  })

  test('should handle SHOW_ALL', () => {
    expect(getVisibleTags(state)).toEqual([
      { id: 1, name: "Tag 1", usages: 0 },
      { id: 2, name: "Tag 2", usages: 0 },
      { id: 3, name: "Tag 3", usages: 2 },
    ])
  })

  test('should handle SHOW_IN_USE', () => {
    state.filter = 'SHOW_IN_USE'
    expect(getVisibleTags(state)).toEqual([
      { id: 3, name: "Tag 3", usages: 2 },
    ])
  })

  test('should handle SHOW_UNUSED', () => {
    state.filter = 'SHOW_UNUSED'
    expect(getVisibleTags(state)).toEqual([
      { id: 1, name: "Tag 1", usages: 0 },
      { id: 2, name: "Tag 2", usages: 0 },
    ])
  })
})
