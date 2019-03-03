// @flow

import type {  MenuModel } from './menu'

export type NotificationDrawerState = {
  +notificationDrawerOpen:boolean,
  +notifications: MenuModel,
}

export type NotificationDrawerAction =
  | {type: "SET_NOTIFICATIONS", +payload: MenuModel}
  | {type: "TOGGLE_NOTIFICATION_DRAWER"}
  | {type: "SHOW_NOTIFICATION_DRAWER"}
  | {type: "HIDE_NOTIFICATION_DRAWER"}
