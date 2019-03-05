// @flow

import type { LocaleState, LocaleAction } from '../types/locale'

const initState: LocaleState = {
  locale: "en"
}

const localeReducer = (state: LocaleState = initState, action: LocaleAction): LocaleState => {
  switch (action.type) {
    case 'CHANGE_LOCALE':
      return {
        ...state,
        locale: action.locale,
      }
    default:
      return state
  }
}

export default localeReducer
