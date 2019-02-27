// @flow
export type MenuItemModel = {
  +title: string,
  subTitle: string,
  tooltip: string,
  icon: string,
  active: boolean,
  to:string,
}

export type SidebarMenuModel = Array<MenuItemModel>

