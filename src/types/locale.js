// @flow
export type Locale = "en" | "de"

export type LocaleState = {
  +locale:Locale,
}

export type LocaleAction =
  | {type: "CHANGE_LOCALE", +locale: Locale}
