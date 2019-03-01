// @flow
import { createRoutine } from 'redux-saga-routines';
import type { Pagination } from '../../types/pagination'

export type ID = string

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


export const tagRoutines = {
  "SAVE": createRoutine('CREATE_TAG'),
  "FIND_BY_ID": createRoutine('READ_TAG'),
  "FIND_ALL": createRoutine('UPDATE_TAG'),
  "DELETE": createRoutine('DELETE_TAG'),
}

export const readTag = createRoutine('READ_TAG');


export type TagCreateRequestAction = {type: "TAG_CREATE_REQUEST", payload: {+id: ID, +name: string}}
export type TagCreateSuccessAction = {type: "TAG_CREATE_SUCCESS", payload: {+id: ID, +name: string}, response: any}
export type TagCreateFailureAction = {type: "TAG_CREATE_FAILURE", payload: {+id: ID, +name: string}, error: any}
export type TagReadAction = {type: "TAG_READ", payload: {+id: ID}}
export type TagUpdateAction = {type: "TAG_UPDATE", payload: {+id: ID, +name: string}}
export type TagDeleteAction = {type: "TAG_DELETE", payload: {+id: ID}}

export type TagsAction =
  | TagCreateRequestAction | TagCreateSuccessAction | TagCreateFailureAction
  | {type: "TAG_CREATE", +id: ID, +name: string}
  | {type: "TAG_READ", +id:ID}
  | {type: "TAG_UPDATE", +id:ID, +name:string}
  | {type: "TAG_DELETE", +id:ID}
  | {type: "TAG_BROWSE", filterByName:string, pagination:Pagination}
  | {type: "TAG_BROWSE_REQUEST", payload: {filterByName:string, pagination:Pagination}}
  | {type: "TAG_BROWSE_SUCCESS", payload: {filterByName:string, pagination:Pagination}, response:any}
  | {type: "TAG_BROWSE_FAILURE", payload: {filterByName:string, pagination:Pagination}, error:any}
  | {type: "TAG_FILTER", filter:TagsFilter}


