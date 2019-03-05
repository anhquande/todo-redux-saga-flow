// @flow

import { createAction } from 'redux-starter-kit'
import type { MenuModel } from './menu'

export type SecondTopbarState = {
  +header: string,
  +icon: string,
  +menuItems: MenuModel,
}

export const clearSecondTopbarActions = createAction('CLEAR_SECOND_TOPBAR_ACTIONS')
export const setSecondTopbarActions = createAction('SET_SECOND_TOPBAR_ACTIONS')
export const setSecondTopbarHeader = createAction('SET_SECOND_TOPBAR_HEADER')
export const addSecondTopbarAction = createAction('ADD_SECOND_TOPBAR_ACTION')
export const removeSecondTopbarAction = createAction('REMOVE_SECOND_TOPBAR_ACTION')
