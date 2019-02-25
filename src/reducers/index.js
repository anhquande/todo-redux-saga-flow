// @flow
import { combineReducers } from 'redux'

import todos from './todos'
import visibilitiyFilters from './visibilityFilter'

export default combineReducers({
  todos, visibilitiyFilters
})

