// @flow
export type PageState = {
  +pageHeader: string,
  tabHeader: string,
}

export type PageAction =
  | {type: "SET_PAGE_HEADER", +pageHeader:string, tabHeader?:string}
