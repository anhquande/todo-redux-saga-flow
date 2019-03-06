// @flow

import type { SidebarMenuAction, SidebarMenuState } from '../types/sidebarMenu'
import { createMenuSection, createTextMenuItem } from '../types/menu'

const sectionMain=createMenuSection("SEC_MAIN", "Main", [
  createTextMenuItem("SM_TODOS","Todos", "todos", "/admin/todos", {}),
  createTextMenuItem("SM_TAGS","Tags", "tags", "/admin/tags", {}),
  createTextMenuItem("SM_HELP","Help", "help", "/admin/help", {}),
])
const sectionHelp=createMenuSection("SEC_HELP", "Support", [
  createTextMenuItem("SM_HELP","Help", "help", "http://help.me.please.com", {}),
  createTextMenuItem("SM_FEEDBACK","Feedback", "tags", "/admin/feedback", {}),
  createTextMenuItem("SM_IMPRINT","Imprint", "imprint", "/admin/imprint", {}),
])

const initState: SidebarMenuState = {
  sidebarMenuOpen: true,
  sidebarMenu: [sectionMain, sectionHelp],
}

const sidebarMenuReducer = (state: SidebarMenuState = initState, action: SidebarMenuAction): SidebarMenuState => {
  switch (action.type) {
    case 'SET_SIDEBAR_MENU':
      return {
        ...state,
        sidebarMenu: action.payload,
      }
    case 'TOGGLE_SIDEBAR_MENU':
      return {
        ...state,
        sidebarMenuOpen: !state.sidebarMenuOpen,
      }
    default:
      return state
  }
}

export default sidebarMenuReducer
