/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
// @flow

import { createReducer } from 'redux-starter-kit'
import type { SecondTopbarState } from '../types/secondTopbar'
import {
  addSecondTopbarAction,
  clearSecondTopbarActions,
  removeSecondTopbarAction,
  setSecondTopbarActions,
  setSecondTopbarHeader
} from '../types/secondTopbar'

const initState: SecondTopbarState = {
  header:"",
  icon:"",
  menuItems: [],
}

const secondTopbarReducer = createReducer(initState,{
  [clearSecondTopbarActions]: (state, action)=>{
    state.menuItems=[]
  },

  [setSecondTopbarActions]: (state, action)=>{
    state.menuItems = action.payload
  },

  [addSecondTopbarAction]: (state, action) => {
    const newItem = action.payload
    const newMenuItems = state.menuItems.filter(i=>i.id !== newItem.id)
    newMenuItems.push(newItem)
    state.menuItems = newMenuItems
  },

  [removeSecondTopbarAction]: (state, action) => {
    const {menuItems} = state
    state.menuItems = menuItems.filter(item=>item.id !== action.payload.id)
  },

  [setSecondTopbarHeader]: (state, action) => {
    console.log('setSecondTopbarHeader ' ,action)
    state.header = action.payload.header
    state.icon = action.payload.icon
  },
})

export default secondTopbarReducer
