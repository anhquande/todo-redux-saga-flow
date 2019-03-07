// @flow
import { createAction } from 'redux-starter-kit'

export type Locale = "en" | "de" | "fr" | "ro"

export type LocaleList = Array<Locale>

export type LocaleState = {
  +locale:Locale,
  visibleLocales:LocaleList,
}

export const changeLocale = createAction('@@locale/change')
