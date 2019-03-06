// @flow

export type Entity = string

export const SAVE = "SAVE"
export const DELETE = "DELETE"
export const FIND_BY_ID = "FIND_BY_ID"
export const FIND_ALL = "FIND_ALL"

export type RepositoryMethod =  "SAVE" | "DELETE" | "FIND_BY_ID" | "FIND_ALL"

export const RepositoryMethodArray = [SAVE, DELETE, FIND_BY_ID, FIND_ALL]

export type PayloadedAction = {type:string, payload:any}
