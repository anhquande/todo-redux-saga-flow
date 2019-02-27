// @flow
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import todos from './todos'
import visibilitiyFilter from './visibilityFilter'
import layout from './layout'
import localeState from './locale'
import pageState from './page'

export default (history) => combineReducers({
  router: connectRouter(history),
  todos,
  visibilitiyFilter,
  layout,
  localeState,
  pageState,
})

