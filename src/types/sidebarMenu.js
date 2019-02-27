// @flow
export type MenuItem = {
  +title: string,
  subTitle: string,
  tooltip: string,
  icon: string,
  active: boolean
}

export type SidebarMenu = Array<MenuItem>

