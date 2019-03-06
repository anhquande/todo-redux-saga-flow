import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import todos from './todos'
import visibilitiyFilter from './visibilityFilter'
import layout from './layout'
import localeState from './locale'
import pageState from './page'
import sidebarMenuState from './sidebarMenu'
import notificationDrawerState from './notificationDrawer'
import topbarMenuState from './topbarMenu'
import secondTopbarState from './secondTopbar'
import tagsState from '../repository/tag/reducers'
import { auth } from '../repository/auth/reducers'

export default (history) => combineReducers({
  router: connectRouter(history),
  todos,
  visibilitiyFilter,
  layout,
  localeState,
  pageState,
  tagsState,
  sidebarMenuState,
  topbarMenuState,
  secondTopbarState,
  notificationDrawerState,
  auth,
})

