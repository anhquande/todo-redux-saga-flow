// @flow
import type { Pagination } from "../../types/pagination"
import type { PayloadedAction } from "../baseRepository"

export type ID = string

export type Tag = {
  +id: ID,
  +name: string,
  +usages: number,
}

export type Tags = Array<Tag>

export type TagsFilter = "SHOW_ALL" | "SHOW_IN_USE" | "SHOW_UNUSED"

export type TagsState = {
  +entities:{
    +tags: Tags,
  },
  result:Tags,
  pagination: Pagination,
  filter: TagsFilter,
  loading: boolean,
}

export type TagsAction =
  | { type: "TAG_FILTER", payload: {filter:TagsFilter }}
  | PayloadedAction


