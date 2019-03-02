// @flow

export type MenuItemModel = {
  +title: string,
  subTitle: string,
  tooltip: string,
  icon: string,
  active: boolean,
  to:string,
  visible:boolean,
}

export type SidebarMenuModel = Array<MenuItemModel>

export type SidebarMenuState = {
  +menu: SidebarMenuModel,
}

export type SidebarMenuAction =
  | {type: "SET_SIDEBAR_MENU", +payload: SidebarMenuModel}
