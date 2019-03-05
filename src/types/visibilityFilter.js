// @flow

export type VisibilityFilter = "SHOW_ALL" | "SHOW_NEW" | "SHOW_TODO" | "SHOW_IN_PROGRESS" | "SHOW_DONE" | "SHOW_APPROVED"

export type VisibilityFilterState = {
  +visibilityFilter: VisibilityFilter
}

export type VisibilityFilterAction = {
  +type: "SET_VISIBILITY_FILTER",
  +payload: {filter:VisibilityFilter}
}
