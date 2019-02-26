// @flow
import { combineReducers } from 'redux'

import todos from './todos'
import visibilitiyFilter from './visibilityFilter'
import layout from './layout'

export default combineReducers({
  todos,
  visibilitiyFilter,
  layout,
})

