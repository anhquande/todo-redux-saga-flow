// @flow

import type { SidebarMenuState, SidebarMenuAction } from '../types/sidebarMenu'

const initState: SidebarMenuState = {
  menu: [
    { title: 'Todos', icon: 'todos', to: '/todos' },
    { title: 'Tags', icon: 'tags', to: '/tags' },
    { title: 'Imprint', icon: 'imprint', to: '/imprint' },
    { title: 'Help', icon: 'help', to: '/help' },
  ],
}

const sidebarMenuReducer = (state: SidebarMenuState = initState, action: SidebarMenuAction): SidebarMenuState => {
  switch (action.type) {
    case 'SET_SIDEBAR_MENU':
      return {
        ...state,
        menu: action.payload,
      }
    default:
      return state
  }
}

export default sidebarMenuReducer
