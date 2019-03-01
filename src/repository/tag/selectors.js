import { createSelector } from 'reselect'
import type { Tags, TagsFilter } from './types'
import { getIn } from '../../utils/objectUtils'

// Select entities from state
export const getTagIds = state => {
  console.log("getTagIds: state= ", state)
  return getIn(state, ["result",0])
}

export const getTags = state => {
  console.log("getTags: state= ", state)
  return getIn(state, ["entities", "tags"])
}
// Select filter from state
export const getFilter = state => {
  return state.filter
}
export const getTagsResult = state => {
  const result = getIn(state, ["result",0])
  console.log("tagResult: getTagsResult= ", result)

  return result
}


const doFilterUsedTags = (tagResult, tags: Tags) => {
  return tagResult.reduce((acc, id) => {
    const tag = tags[id]
    if (tag && tag.usages > 0) {
      return [...acc, tag]
    }
    return acc
  }, [])
}
const doFilterUnusedTags = (tagResult, tags: Tags) => {
  return tagResult.reduce((acc, id) => {
    const tag = tags[id]
    if (tag && tag.usages === 0) {
      return [...acc, tag]
    }
    return acc
  }, [])
}

export const doFilter = (tagResult, tags: Tags, filter: TagsFilter) => {
  console.log("selectTags.doFilter: ", tagResult, tags, filter)
  switch (filter) {
    case 'SHOW_IN_USE':
      return doFilterUsedTags(tagResult, tags)

    case 'SHOW_UNUSED':
      return doFilterUnusedTags(tagResult, tags)

    case 'SHOW_ALL':
    default:
      return tagResult.reduce((acc, id) => {
        const tag = tags[id]
        if (tag) {
          return [...acc, tag]
        }
        return acc
      }, [])
  }
}

export const getVisibleTags = createSelector(
  getTagsResult,
  getTags,
  getFilter,
  doFilter
)

export const getUsedTags = createSelector(
  getTagsResult,
  getTags,
  doFilterUsedTags
)

export const getUnusedTags = createSelector(
  getTagsResult,
  getTags,
  doFilterUnusedTags
)

