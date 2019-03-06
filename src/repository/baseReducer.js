/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["acc","draft"] }] */
import { RepositoryMethodArray } from './baseRepository'

export const createDefaultRepositoryReducers = (entityRepository) => {
  const routines = RepositoryMethodArray.reduce( (acc, method) => {
    acc[entityRepository[method].TRIGGER] = (draft,action) => {draft.loading=true}
    acc[entityRepository[method].REQUEST] = (draft,action) => {}
    acc[entityRepository[method].SUCCESS] = (draft,action) => {draft.entities=action.payload.entities;draft.result=action.payload.result}
    acc[entityRepository[method].FAILURE] = (draft,action) => {draft.error=action.payload}
    acc[entityRepository[method].FULFILL] = (draft,action) => {draft.loading=false}
    return acc
  }, {})

  return routines
}
