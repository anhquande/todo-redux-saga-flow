/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
// @flow

import { createReducer } from 'redux-starter-kit'
import type { AuthState } from './types'
import { Anonymous } from './types'
import { LogInRoutine, LogOutRoutine } from './routines'
import { getIn } from '../../utils/objectUtils'

// const initState: AuthState = {
//   authenticated: false,
//   grantedAuthorities: ['ROLE_ADMIN', 'ROLE_GUESS'],
//   user:Anonymous,
//   sessionId: "",
//   token: "",
//   loading: false,
//   error: "",
// }
const initState: AuthState = {
  authenticated: true,
  grantedAuthorities: ['ROLE_ADMIN', 'ROLE_GUESS', 'ROLE_MANAGE_TAG', 'ROLE_MANAGE_TODO'],
  user:{
    username:"faker",
    id:"123456789",
    email:"faker@email.com",

  },
  sessionId: "",
  token: "",
  loading: false,
  error: "",
}

export const auth = createReducer(initState, {
  [LogInRoutine.TRIGGER]: (state, action) => {
    state.authenticated = false
    state.user = Anonymous
    state.grantedAuthorities = []
    state.sessionId = ""
    state.token = ""
    state.loading = true
    state.error = ""
  },
  [LogInRoutine.REQUEST]: (state, action) => {
  },
  [LogInRoutine.SUCCESS]: (state, action) => {
    state.authenticated = true
    state.grantedAuthorities = getIn(action,["payload","user","roles"])
    state.user = getIn(action,["payload","user"])
    state.sessionId = action.payload.sessionId
    state.token = action.payload.token
  },
  [LogInRoutine.FAILURE]: (state, action) => {
    state.error = action.payload || "Cannot login"
  },
  [LogInRoutine.FULFILL]: (state, action) => {
    state.loading = false
  },

  // Logout
  [LogOutRoutine.TRIGGER]: (state, action) => {
    state.authenticated = false
    state.grantedAuthorities = []
    state.sessionId = ""
    state.token = ""
    state.loading = true
    state.error = ""
  },
  [LogOutRoutine.FULFILL]: (state, action) => {
    state.loading = false
  },

})
