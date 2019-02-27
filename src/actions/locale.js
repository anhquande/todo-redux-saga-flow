// @flow

import type { LocaleAction } from '../types/locale'

export const changeLocale = (locale): LocaleAction => {
  return {
    type: 'CHANGE_LOCALE',
    locale
  }
}
