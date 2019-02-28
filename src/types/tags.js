// @flow

import type { Pagination } from './pagination'

export type ID = number

export type Tag = {
  +id: ID,
  +name: string,
  +usages: number,
}

export type Tags = Array<Tag>

export type TagsFilter = 'SHOW_ALL' | 'SHOW_IN_USE' | 'SHOW_UNUSED'

export type TagsState = {
  +tags: Tags,
  pagination:Pagination,
  filter:TagsFilter,
}

export type TagsAction =
  | {type: "TAG_CREATE", +id: ID, +name: string}
  | {type: "TAG_READ", +id:ID}
  | {type: "TAG_UPDATE", +id:ID, +name:string}
  | {type: "TAG_DELETE", +id:ID}
  | {type: "TAG_BROWSE", filterByName:string, pagination:Pagination}
  | {type: "TAG_FILTER", filter:TagsFilter}


