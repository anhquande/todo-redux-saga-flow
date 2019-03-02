// @flow

import type { MenuItemModel } from './menu'

export type TopbarMenuModel = Array<MenuItemModel>

export type TopbarMenuState = {
  +topbarMenu: TopbarMenuModel,
}

export type TopbarMenuAction =
  | {type: "SET_TOPBAR_MENU", +payload: TopbarMenuModel}
