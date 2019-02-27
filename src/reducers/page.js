// @flow

import type { PageState, PageAction } from '../types/page'

const initState: PageState = {
  pageHeader: "",
  tabHeader: "",
}


const pageState = (state: PageState = initState, action: PageAction): PageState => {
  switch (action.type) {
    case 'SET_PAGE_HEADER':
      return {
        ...state,
        pageHeader: action.pageHeader,
        tabHeader: (action.tabHeader ? action.tabHeader : action.pageHeader),
      }

    default:
      return state
  }
}

export default pageState
