// @flow
import { normalize, schema } from 'normalizr'
import { camelizeKeys } from 'humps'
import { TagRoutines } from './tag/repository'
import type { Action } from '../types'
import { LogInRoutine, LogOutRoutine } from './auth/routines'

export const HTTP_METHOD = {
  POST: "post",
  GET: "get",
  PUT: "put",
  DELETE: "delete"
}

function callApi(endpoint, httpMethod, body, responseSchema) {
  const apiHost = 'http://localhost:8080'
  const fullUrl = (endpoint.indexOf(apiHost) === -1) ? apiHost + endpoint : endpoint

  const headers = new Headers()
  // headers.append('Authorization', token)
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json')

  return fetch(fullUrl, {
    method: httpMethod,
    headers,
    body,
  })
  .then(response => response.json()
  .then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json)
    }

    if (responseSchema){
      const camelizedJson = camelizeKeys(json)

      return Object.assign({},
        normalize(camelizedJson, responseSchema))
    }

    return Object.assign({},json)
  })
  .then(
    response => ({ response }),
    error => ({ error: error.message || error }),
  )
}

const tagSchema = new schema.Entity('tags', {
  idAttribute: 'id',
})
const tagArraySchema = new schema.Array( new schema.Array(tagSchema))

function buildRequestBody(params){
  const json =  JSON.stringify(params)
  return json
}
export function apiClient(action:Action) {

  switch (action.type) {
    case TagRoutines.FIND_ALL.TRIGGER:

      return callApi('/tags', HTTP_METHOD.GET, "", tagArraySchema)

    case LogInRoutine.TRIGGER:
      return callApi('/auth/login', HTTP_METHOD.POST, buildRequestBody({username:action.payload.username, password: action.payload.password}))

    case LogOutRoutine.TRIGGER:
      // TODO: clear the token
      return ""

    default:
      console.log("make apiClient request: ", action)
  }

  return ""
}

