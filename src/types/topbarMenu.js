// @flow

import type { MenuModel } from './menu'

export type TopbarMenuState = {
  +topbarMenu: MenuModel,
}

export type TopbarMenuAction =
  | {type: "SET_TOPBAR_MENU", +payload: MenuModel}
