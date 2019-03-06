// @flow

import type { NotificationDrawerAction, NotificationDrawerState } from "../types/notificationDrawer"
import { createTextMenuItem } from "../types/menu"

const initState: NotificationDrawerState = {
  notificationDrawerOpen: false,
  notifications: [
    createTextMenuItem("SM_TODOS","Todos", "todos", "/admin/todos", {}),
    createTextMenuItem("SM_TAGS","Tags", "tags", "/admin/tags", {}),
    createTextMenuItem("SM_IMPRINT","Imprint", "imprint", "/admin/imprint", {}),
    createTextMenuItem("SM_HELP","Help", "help", "/admin/help", {}),
  ],
}

const notificationDrawerReducer = (state: NotificationDrawerState = initState, action: NotificationDrawerAction): NotificationDrawerState => {
  switch (action.type) {
    case "SET_NOTIFICATIONS":
      return {
        ...state,
        notifications: action.payload,
      }
    case "TOGGLE_NOTIFICATION_DRAWER":
      return {
        ...state,
        notificationDrawerOpen: !state.notificationDrawerOpen,
      }
    case "SHOW_NOTIFICATION_DRAWER":
      return {
        ...state,
        notificationDrawerOpen: true,
      }
    case "HIDE_NOTIFICATION_DRAWER":
      return {
        ...state,
        notificationDrawerOpen: false,
      }
    default:
      return state
  }
}

export default notificationDrawerReducer
