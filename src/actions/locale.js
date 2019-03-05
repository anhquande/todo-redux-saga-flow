// @flow

import type { Locale, LocaleAction } from '../types/locale'

export const changeLocale = (locale:Locale): LocaleAction => {
  return {
    type: 'CHANGE_LOCALE',
    locale
  }
}
