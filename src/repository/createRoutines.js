// @flow
import { createRoutine } from 'redux-saga-routines'
import { DELETE, FIND_ALL, FIND_BY_ID, SAVE } from './baseRepository'
import type { Entity } from './baseRepository'

const RepositoryMethodArray = [SAVE, DELETE, FIND_BY_ID, FIND_ALL]

const createRoutines = (entity:Entity) => {
  const routines = RepositoryMethodArray.reduce( (acc, current) => {
    acc[current] = createRoutine(`REPOSITORY_${entity  }_${current}`)
    return acc
  }, {})


  return routines
}

export default createRoutines
