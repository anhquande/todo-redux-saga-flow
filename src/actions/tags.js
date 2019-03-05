// @flow

import type { TagsAction, TagsFilter } from '../repository/tag/types'

export const filterTag = (filter:TagsFilter): TagsAction => {
  return {
    type: 'TAG_FILTER',
    payload:filter,
  }
}
