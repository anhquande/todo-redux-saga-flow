// @flow

import type { VisibilityFilter, VisibilityFilterAction } from '../types/visibilityFilter'

const visibilityFilter = (
  state: VisibilityFilter = "SHOW_ALL",
  action: VisibilityFilterAction
): VisibilityFilter => {

  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.payload.filter
    default:
      return state
  }
}

export default visibilityFilter
