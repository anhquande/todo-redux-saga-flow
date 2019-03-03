// @flow

import type { NotificationDrawerAction } from '../types/notificationDrawer'

export const setNotifications = (notifications): NotificationDrawerAction => {
  return {
    type:'SET_NOTIFICATION_DRAWER',
    notifications
  }
}
export const toggleNotificationDrawer = (): NotificationDrawerAction => {
  return {
    type:'TOGGLE_NOTIFICATION_DRAWER'
  }
}
export const openNotificationDrawer = (): NotificationDrawerAction => {
  return {
    type:'SHOW_NOTIFICATION_DRAWER'
  }
}
export const hideNotificationDrawer = (): NotificationDrawerAction => {
  return {
    type:'HIDE_NOTIFICATION_DRAWER'
  }
}
