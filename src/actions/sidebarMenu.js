// @flow

import type { SidebarMenuAction } from '../types/sidebarMenu'

export const toggleSidebarMenu = (): SidebarMenuAction => {
  return {
    type:'TOGGLE_SIDEBAR_MENU'
  }
}
