// @flow
import { createRoutine } from 'redux-saga-routines'

export type Entity = string

export const SAVE = 'SAVE'
export const DELETE = 'DELETE'
export const FIND_BY_ID = 'FIND_BY_ID'
export const FIND_ALL = 'FIND_ALL'

const RepositoryMethodArray = [SAVE, DELETE, FIND_BY_ID, FIND_ALL]
export type RepositoryMethod =  SAVE | DELETE | FIND_BY_ID | FIND_ALL

const createRoutines = (entity:Entity) => {
  const routines = RepositoryMethodArray.reduce( (acc, current) => {
    acc[current] = createRoutine(`REPOSITORY_${entity  }_${current}`)
    return acc
  }, {})


  return routines
}

export default createRoutines
