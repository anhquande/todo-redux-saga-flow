// @flow
import { combineReducers } from 'redux'

import todos from './todos'
import visibilitiyFilter from './visibilityFilter'

export default combineReducers({
  todos, visibilitiyFilter
})

