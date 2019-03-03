// @flow

import type { TopbarMenuAction, TopbarMenuState } from '../types/topbarMenu'
import { createIconOnlyMenuItem } from '../types/menu'
const initState: TopbarMenuState = {
  topbarMenu: [
    createIconOnlyMenuItem("TM_NOTIFICATiONS",'Notifications', 'notifications', '/todos', {badgeVisible:true, badge:9}),
    createIconOnlyMenuItem("TM_ACCOUNT",'My Account', 'accountCircle', '',
      {badgeVisible:true,
        badge:9,
      }),
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
