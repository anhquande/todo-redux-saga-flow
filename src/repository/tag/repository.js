// @flow
import createRoutines from '../createRoutines'
import type { Entity } from '../baseRepository'

export const TAG: Entity = "TAG"

export const TagRepository = {
  TAG : createRoutines(TAG)
}

export const TagRoutines = createRoutines(TAG)
