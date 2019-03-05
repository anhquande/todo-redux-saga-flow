// @flow

import type { Tags, TagsAction, TagsState } from './types'
import { TagRepository } from './repository'

const initList: TagsState = {
  entities: {
    tags: [],
  },
  result: [],
  pagination: { start: 0, limit: 1000, pageSize: 20, },
  filter: 'SHOW_ALL',
  loading: false,
}

const tagsState = (state: TagsState = initList, action: TagsAction): TagsState => {

  if (action.type.endsWith("TRIGGER")) {
    return { ...state, loading: true }
  }
  if (action.type.endsWith("FULFILL")) {
    return { ...state, loading: false }
  }

  switch (action.type) {

    case TagRepository.TAG.FIND_ALL.SUCCESS:
      const { payload } = action
      const newState = { ...state, ...payload }

      return newState

    case TagRepository.TAG.FIND_ALL.FAILURE:
      return { ...state, error: action.payload }

    case "TAG_FILTER":
      return { ...state, filter: action.payload.filter }


    default:
      return state
  }
}

export default tagsState
