// @flow

import type { MenuSectionList } from './menu'

export type SidebarMenuState = {
  +sidebarMenuOpen:boolean,
  +sidebarMenu: MenuSectionList,
}

export type SidebarMenuAction =
  | {type: "SET_SIDEBAR_MENU", +payload: MenuSectionList}
  | {type: "TOGGLE_SIDEBAR_MENU"}
