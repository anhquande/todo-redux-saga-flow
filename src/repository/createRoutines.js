// @flow
import { createRoutine } from 'redux-saga-routines'
import { RepositoryMethodArray } from './baseRepository'
import type { Entity } from './baseRepository'

const createRepositoryRoutines = (entity:Entity) => {
  const routines = RepositoryMethodArray.reduce( (acc, current) => {
    acc[current] = createRoutine(`REPOSITORY_${entity  }_${current}`)
    return acc
  }, {})

  return routines
}

export default createRepositoryRoutines
