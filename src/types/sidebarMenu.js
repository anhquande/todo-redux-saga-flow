// @flow

import type {  MenuModel } from './menu'

export type SidebarMenuState = {
  +sidebarMenuOpen:boolean,
  +sidebarMenu: MenuModel,
}

export type SidebarMenuAction =
  | {type: "SET_SIDEBAR_MENU", +payload: MenuModel}
  | {type: "TOGGLE_SIDEBAR_MENU"}
