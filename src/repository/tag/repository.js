// @flow
import type { Entity, createRepository } from '../repositories'

export const TAG: Entity = "TAG"

export const TagRepository = {
  TAG : createRepository(TAG)
}
