/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
// @flow

import { createReducer } from 'redux-starter-kit'
import type { AuthState } from './types'
import { LogInRoutine, LogOutRoutine } from './routines'

const initState: AuthState = {
  authenticated: false,
  grantedAuthorities: ['ROLE_ADMIN', 'ROLE_GUESS'],
  sessionId: "",
  token: "",
  loading: false,
  error: "",
}

export const auth = createReducer(initState, {
  [LogInRoutine.TRIGGER]: (state, action) => {
    state.authenticated = false
    state.grantedAuthorities = []
    state.sessionId = ""
    state.token = ""
    state.loading = true
    state.error = ""
  },
  [LogInRoutine.REQUEST]: (state, action) => {
  },
  [LogInRoutine.SUCCESS]: (state, action) => {
    console.log("LOGIN SUCCESS: ", action)
    state.authenticated = true
    state.grantedAuthorities = action.payload.grantedAuthorities
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
