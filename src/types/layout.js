// @flow
export type DrawerState = 'closed' | 'minimized' | 'maximized'
export type ResponsiveMode = 'mobile' | 'desktop'

export type LayoutState = {
  +drawerState: DrawerState,
  +responsiveMode: ResponsiveMode
}

export type LayoutAction =
  | {type: "CLOSE_DRAWER"}
  | {type: "OPEN_DRAWER"}
  | {type: "TOGGLE_DRAWER"}
  | {type: "SET_MOBILE_VIEW"}
  | {type: "SET_DESKTOP_VIEW"}
