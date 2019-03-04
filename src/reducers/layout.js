// @flow

import type { LayoutState, LayoutAction, DrawerState } from '../types/layout'

const initState: LayoutState = {
  drawerState: 'maximized',
  responsiveMode: 'desktop'
}

const doToggleLayout = (currentState: LayoutState): DrawerState => {
  switch (currentState.drawerState) {
    case 'maximized':
      return currentState.responsiveMode === 'desktop' ? 'minimized' : 'closed'

    case 'closed':
      return currentState.responsiveMode === 'desktop' ? 'minimized' : 'maximized'

    case 'minimized':
    default:
      return 'maximized'
  }
}

const layout = (state: LayoutState = initState, action: LayoutAction): LayoutState => {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return { ...state, drawerState: doToggleLayout(state) }

    case 'SET_MOBILE_VIEW':
      return {...state, responsiveMode: 'mobile'}

    case 'SET_DESKTOP_VIEW':
      return {...state, responsiveMode: 'desktop'}

    default:
      return state
  }
}

export default layout
