// @flow
const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'


function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

function action(type, payload = {}) {
  return {type, ...payload}
}

export const TAG = createRequestTypes('TAG')
export const TAG_LIST = createRequestTypes('TAG_LIST')

export const tag = {
  request: id => action(TAG[REQUEST], {id}),
  success: (id, response) => action(TAG[SUCCESS], {id}, response),
  failure: (id, error) => action(TAG[FAILURE], {id}, error),
}
export const tagList = {
  request: (filter) => action(TAG_LIST[REQUEST], {filter}),
  success: (filter, response) => action(TAG_LIST[SUCCESS], {filter, response}),
  failure: (filter, error) => action(TAG_LIST[FAILURE], {filter, error}),
}
