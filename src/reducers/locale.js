// @flow

import { createReducer } from 'redux-starter-kit'
import type { LocaleState } from '../types/locale'
import { changeLocale } from '../types/locale'

const initState: LocaleState = {
  locale: "en",
  visibleLocales: ['de','en','fr','ro']
}

const localeReducer = createReducer(initState, {
  [changeLocale]:(draft, action) => {draft.locale = action.payload.locale},
})

export default localeReducer
