// @flow

import type { TopbarMenuState, TopbarMenuAction } from '../types/topbarMenu'

const initState: TopbarMenuState = {
  topbarMenu: [
    { title: 'Todos', icon: 'todos', to: '/todos' },
    { title: 'Tags', icon: 'tags', to: '/tags' },
    { title: 'Imprint', icon: 'imprint', to: '/imprint' },
    { title: 'Help', icon: 'help', to: '/help' },
  ],
}

const topbarMenuReducer = (state: TopbarMenuState = initState, action: TopbarMenuAction): TopbarMenuState => {
  switch (action.type) {
    case 'SET_SIDEBAR_MENU':
      return {
        ...state,
        topbarMenu: action.payload,
      }
    default:
      return state
  }
}

export default topbarMenuReducer
