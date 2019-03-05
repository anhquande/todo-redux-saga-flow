// @flow

export type MenuItemModel = {
  +id: string,
  +title: string,
  subTitle: string,
  tooltip: string,
  icon: string,
  active: boolean,
  badge: number,
  badgeVisible: boolean,
  to: string,
  visible: boolean,
  visibleOnDesktop: boolean,
  visibleOnMobile: boolean,
  event: Event
}

export type MenuModel = Array<MenuItemModel>

export type MenuSectionModel = {
  id:string,
  visible:boolean,
  header: string,
  headerVisible: boolean,
  menuItems: MenuModel,
}

export type MenuSectionList = Array<MenuSectionModel>

export function createMenuSection(id, header, menuItems, { ...params }): MenuSectionModel {
  const headerVisible = header !== null || header !== undefined || header !== ''
  return {
    id,
    visible:true,
    header,
    headerVisible,
    menuItems,
    ...params
  }
}

export function createTextMenuItem(id, title, icon, to, { ...params }): MenuItemModel {
  return {
    id,
    title,
    subTitle: '',
    tooltip: title,
    icon,
    active: false,
    badge: 0,
    badgeVisible: false,
    to,
    visible: true,
    visibleOnDesktop: true,
    visibleOnMobile: true,
    event: null,
    ...params
  }
}

export function createIconOnlyMenuItem(id, tooltip, icon, to, { ...params }): MenuItemModel {
  return {
    id,
    title: '',
    subTitle: '',
    tooltip,
    icon,
    active: false,
    badge: 0,
    badgeVisible: false,
    to,
    visible: true,
    visibleOnDesktop: true,
    visibleOnMobile: true,
    event: null,
    ...params
  }
}
