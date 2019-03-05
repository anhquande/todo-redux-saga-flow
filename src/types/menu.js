// @flow

export type MenuItemTarget = string

export type Event = string

export type MenuItemModel = {
  +id: string,
  +title: string,
  subTitle: string,
  tooltip: string,
  icon: string,
  active: boolean,
  badge: number,
  badgeVisible: boolean,
  to: MenuItemTarget,
  visible: boolean,
  visibleOnDesktop: boolean,
  visibleOnMobile: boolean,
  event: Event
}

export type MenuModel = Array<MenuItemModel>

export type MenuSectionModel = {
  id: string,
  visible: boolean,
  header: string,
  headerVisible: boolean,
  menuItems: MenuModel,
}

export type MenuSectionList = Array<MenuSectionModel>

export function createMenuSection(id: string, header: string, menuItems: MenuModel): MenuSectionModel {
  const headerVisible = header !== null || header !== undefined || header !== ''
  return {
    id,
    visible: true,
    header,
    headerVisible,
    menuItems,
  }
}

export function createTextMenuItem(
  id: string,
  title: string,
  icon: string,
  to: MenuItemTarget,
  { ...params }: {
    params?: {
      badgeVisible?: boolean,
      badge?: number,
    }
  }): MenuItemModel {
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
    event: "",
    ...params
  }
}

export function createIconOnlyMenuItem(id: string, tooltip: string, icon: string, to: MenuItemTarget, { ...params }: {
                                         params?: {
                                           badgeVisible?: boolean,
                                           badge?: number,
                                         }
                                       }
): MenuItemModel {
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
    event: "",
    ...params
  }
}
