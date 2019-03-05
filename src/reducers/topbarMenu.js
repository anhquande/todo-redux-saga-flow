// @flow

import type { TopbarMenuAction, TopbarMenuState } from '../types/topbarMenu'
import { createIconOnlyMenuItem } from '../types/menu'

const initState: TopbarMenuState = {
  topbarMenu: [
    createIconOnlyMenuItem("TM_NOTIFICATIONS",
      "Notifications",
      "notifications",
      "",
      { badgeVisible: true, badge: 9 }),
    createIconOnlyMenuItem("TM_ACCOUNT", "My Account", "accountCircle", "", {}),
  ],
}


const topbarMenuReducer = (state: TopbarMenuState = initState, action: TopbarMenuAction): TopbarMenuState => {
  switch (action.type) {
    case "SET_TOPBAR_MENU":
      return {
        ...state,
        topbarMenu: action.payload,
      }
    default:
      return state
  }
}

export default topbarMenuReducer
