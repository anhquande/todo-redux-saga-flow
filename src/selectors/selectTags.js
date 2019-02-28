// @flow

import { createSelector } from 'reselect'

import type { TagsFilter, Tags, TagsState } from '../types/tags'

const tagsSelector = (state: TagsState) => {
  return state.tags
}

const tagsFilterSelector = (state: TagsState) => {
  return state.filter
}

export const doFilter = (tags: Tags, filter: TagsFilter)  => {
  console.log("selectTags.doFilter: ",tags,filter)
  switch (filter) {

    case 'SHOW_IN_USE':
      return tags.filter(t => t.usages > 0)

    case 'SHOW_UNUSED':
      return tags.filter(t => t.usages === 0)

    case 'SHOW_ALL':
    default:
      return tags
  }
}

export const visibleTagsSelector = createSelector(
  tagsSelector,
  tagsFilterSelector,
  doFilter
)

