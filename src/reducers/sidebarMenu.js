// @flow

import type { SidebarMenuState, SidebarMenuAction } from '../types/sidebarMenu'
import { createTextMenuItem } from '../types/menu'
import IconButton from '../containers/app/TopbarDesktopMenu';
import React from 'react';

const initState: SidebarMenuState = {
  sidebarMenuOpen: true,
  sidebarMenu: [
    createTextMenuItem('SM_TODOS','Todos', 'todos', '/todos'),
    createTextMenuItem('SM_TAGS','Tags', 'tags', '/tags'),
    createTextMenuItem('SM_IMPRINT','Imprint', 'imprint', '/imprint'),
    createTextMenuItem('SM_HELP','Help', 'help', '/help'),
  ],
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
