// @flow

import type { ID, TagsAction, TagsFilter } from '../types/tags'
import type { Pagination } from '../types/pagination'

export const createTag = (name: string): TagsAction => {
  return {
    type: 'TAG_CREATE',
    name
  }
}

export const readTag = (id: ID): TagsAction => {
  return {
    type: 'TAG_READ',
    id,
  }
}

export const updateTag = (id: ID, name: string): TagsAction => {
  return {
    type: 'TAG_UPDATE',
    id,
    name
  }
}

export const deleteTag = (id: ID): TagsAction => {
  return {
    type: 'TAG_DELETE',
    id,
  }
}

export const browseTag = (filterByName:string, pagination: Pagination): TagsAction => {
  return {
    type: 'TAG_BROWSE',
    filterByName,
    pagination,
  }
}

export const filterTag = (filter:TagsFilter): TagsAction => {
  return {
    type: 'TAG_FILTER',
    filter,
  }
}
