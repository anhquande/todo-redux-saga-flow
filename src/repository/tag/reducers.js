// @flow

import { createReducer } from 'redux-starter-kit'
import type { TagsState } from './types'
import { TagRoutines } from './repository'
import { createDefaultRepositoryReducers } from '../baseReducer'

const initState: TagsState = {
  entities: {
    tags: [],
  },
  result: [],
  pagination: { start: 0, limit: 1000, pageSize: 20, },
  filter: 'SHOW_ALL',
  loading: false,
}

export default createReducer(initState, {
  ...createDefaultRepositoryReducers(TagRoutines),
})
