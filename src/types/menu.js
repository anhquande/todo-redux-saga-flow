// @flow

import type { GrantedAuthorities } from '../repository/auth/types'

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
  component: any,
  visible: boolean,
  visibleOnDesktop: boolean,
  visibleOnMobile: boolean,
  event: Event,
  hasAnyRole: GrantedAuthorities
}

export type MenuModel = Array<MenuItemModel>

export type MenuSectionModel = {
  id: string,
  visible: boolean,
  header: string,
  headerVisible: boolean,
  menuItems: MenuModel,
  hasAnyRole: GrantedAuthorities
}

export type MenuSectionList = Array<MenuSectionModel>

export function createMenuSection(id: string, header: string, menuItems: MenuModel, hasAnyRole:GrantedAuthorities=["*"]): MenuSectionModel {
  const headerVisible = header !== null || header !== undefined || header !== ''
  return {
    id,
    visible: true,
    header,
    headerVisible,
    menuItems,
    hasAnyRole,
  }
}

export function createComponentMenuItem(
  id: string,
  component: any,
  hasAnyRole:GrantedAuthorities=["*"],
  { ...params }: {
    params?: {
      badgeVisible?: boolean,
      badge?: number,
    }
  }): MenuItemModel {
  return {
    id,
    title: '',
    subTitle: '',
    tooltip: '',
    icon: '',
    active: false,
    badge: 0,
    badgeVisible: false,
    to:"",
    component,
    visible: true,
    visibleOnDesktop: true,
    visibleOnMobile: true,
    event: "",
    hasAnyRole,
    ...params
  }
}

export function createTextMenuItem(
  id: string,
  title: string,
  icon: string,
  to: MenuItemTarget,
  hasAnyRole:GrantedAuthorities=["*"],
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
    component: null,
    visible: true,
    visibleOnDesktop: true,
    visibleOnMobile: true,
    event: "",
    hasAnyRole,
    ...params
  }
}

export function createIconOnlyMenuItem(id: string, tooltip: string, icon: string, to: MenuItemTarget, { ...params }: {
                                         params?: {
                                           badgeVisible?: boolean,
                                           badge?: number,
                                         }
                                       },
                                       hasAnyRole:GrantedAuthorities=["*"]
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
    component: null,
    visible: true,
    visibleOnDesktop: true,
    visibleOnMobile: true,
    event: "",
    hasAnyRole,
    ...params
  }
}
