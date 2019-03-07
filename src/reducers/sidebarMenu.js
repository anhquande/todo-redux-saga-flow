// @flow
import type { SidebarMenuAction, SidebarMenuState } from '../types/sidebarMenu'
import { createComponentMenuItem, createMenuSection, createTextMenuItem } from '../types/menu'
import { LanguageSwitcher } from '../containers/LanguageSwitcher'

const sectionMain=createMenuSection("SEC_MAIN", "Main", [
  createTextMenuItem("SM_TODOS","Todos", "todos", "/admin/todos", ["ROLE_MANAGE_TODO"], {}),
  createTextMenuItem("SM_TAGS","Tags", "tags", "/admin/tags", ["ROLE_MANAGE_TAG"], {}),
])
const sectionHelp=createMenuSection("SEC_HELP", "Support", [
  createTextMenuItem("SM_HELP","Help", "help", "http://help.me.please.com", ["*"],{}),
  createTextMenuItem("SM_FEEDBACK","Feedback", "tags", "/admin/feedback", ["*"],{}),
  createTextMenuItem("SM_IMPRINT","Imprint", "imprint", "/admin/imprint", ["*"], {}),
])

const sectionLanguage=createMenuSection("SEC_LANGUAGE", "Language", [
  createComponentMenuItem("SM_LANG_SWITCHER",LanguageSwitcher,["*"]),
])

const initState: SidebarMenuState = {
  sidebarMenuOpen: true,
  sidebarMenu: [sectionMain, sectionHelp, sectionLanguage],
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
