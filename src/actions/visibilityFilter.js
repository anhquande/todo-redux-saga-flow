// @flow

import type {
  VisibilityFilter,
  VisibilityFilterAction
} from '../types/visibilityFilter'

export const setVisibilityFilter = (
  filter: VisibilityFilter
): VisibilityFilterAction => {
  console.log("actions.setvisibileitly: filter = ", filter)
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
