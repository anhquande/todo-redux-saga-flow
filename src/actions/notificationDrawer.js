// @flow

import type { NotificationDrawerAction } from '../types/notificationDrawer'
import type { MenuModel } from '../types/menu'

export const setNotifications = (notifications:MenuModel): NotificationDrawerAction => {
  return {
    type:"SET_NOTIFICATIONS",
    payload:notifications
  }
}
export const toggleNotificationDrawer = (): NotificationDrawerAction => {
  return {
    type:"TOGGLE_NOTIFICATION_DRAWER"
  }
}
export const openNotificationDrawer = (): NotificationDrawerAction => {
  return {
    type:"SHOW_NOTIFICATION_DRAWER"
  }
}
export const hideNotificationDrawer = (): NotificationDrawerAction => {
  return {
    type:"HIDE_NOTIFICATION_DRAWER"
  }
}
