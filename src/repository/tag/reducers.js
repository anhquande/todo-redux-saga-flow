// @flow

import type { Tags, TagsAction, TagsState } from './types'
import { TagRepository } from './repository'

const initList: TagsState = {
  entities: {
    tags: [],
  },
  result: [],
  pagination: { start: 0 },
  filter: 'SHOW_ALL',
  loading: false,
}

const tagsState = (state: Tags = initList, action: TagsAction): TagsState => {

  if (action.type.endsWith("TRIGGER")) {
    return {...state, loading: true }
  }
  if (action.type.endsWith("FULFILL")) {
    return {...state, loading: false }
  }

  switch (action.type) {

    case TagRepository.TAG.FIND_ALL.SUCCESS:
      console.log("new tags: ", action.payload)
      console.log("oldState (before mergeDeep): ", state)
      const {payload} = action
      const newState = {...state, ...payload}
      console.log("newState (after mergeDeep): ", newState)

      return newState

    case TagRepository.TAG.FIND_ALL.FAILURE:
      return {...state, error: action.payload }

    case 'TAG_FILTER':
      return {...state, filter: action.filter }

    default:
      return state
  }
}

export default tagsState
