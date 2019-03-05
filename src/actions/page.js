// @flow

import { createAction } from 'redux-starter-kit'
import type { PageAction } from '../types/page'

export const setPageHeader = (pageHeader: string, tabHeader: string): PageAction => {
  return {
    type: 'SET_PAGE_HEADER',
    pageHeader,
    tabHeader,
  }
}
