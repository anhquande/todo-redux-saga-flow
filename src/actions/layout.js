// @flow

import type { LayoutAction } from '../types/layout'

export const openDrawer = (): LayoutAction => {
  return {
    type:'OPEN_DRAWER'
  }
}
export const closeDrawer = (): LayoutAction => {
  return {
    type:'CLOSE_DRAWER'
  }
}
export const toggleDrawer = (): LayoutAction => {
  return {
    type:'TOGGLE_DRAWER'
  }
}
export const setMobileView = (): LayoutAction => {
  return {
    type:'SET_MOBILE_VIEW'
  }
}
export const setDesktopView = (): LayoutAction => {
  return {
    type:'SET_DESKTOP_VIEW'
  }
}
