// @flow

import type { LayoutAction } from '../types/layout'

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
