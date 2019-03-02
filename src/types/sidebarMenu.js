// @flow

import type { MenuItemModel } from './menu'

export type SidebarMenuModel = Array<MenuItemModel>

export type SidebarMenuState = {
  +sidebarMenuOpen:boolean,
  +sidebarMenu: SidebarMenuModel,
}

export type SidebarMenuAction =
  | {type: "SET_SIDEBAR_MENU", +payload: SidebarMenuModel}
  | {type: "TOGGLE_SIDEBAR_MENU"}
