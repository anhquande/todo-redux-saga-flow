// @flow
const REQUEST = "REQUEST"
const SUCCESS = "SUCCESS"
const FAILURE = "FAILURE"


function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

function action(type:string, payload = {}) {
  return {type, ...payload}
}

export const TAG = createRequestTypes("TAG")
export const TAG_LIST = createRequestTypes("TAG_LIST")

export const tag = {
  request: (id:string) => action(TAG[REQUEST], {id}),
  success: (id:string, response:any) => action(TAG[SUCCESS], {id, response}),
  failure: (id:string, error:string) => action(TAG[FAILURE], {id, error}),
}
export const tagList = {
  request: (filter:string) => action(TAG_LIST[REQUEST], {filter}),
  success: (filter:string, response:any) => action(TAG_LIST[SUCCESS], {filter, response}),
  failure: (filter:string, error:any) => action(TAG_LIST[FAILURE], {filter, error}),
}
