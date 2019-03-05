// @flow
import { normalize, schema } from 'normalizr'
import { camelizeKeys } from 'humps'
import { TagRepository } from './tag/repository'
import type { Action } from '../types'

export const HTTP_METHOD = {
  POST: "post",
  GET: "get",
  PUT: "put",
  DELETE: "delete"
}

function callApi(endpoint, httpMethod, responseSchema) {
  const apiHost = 'http://localhost:8080'
  const fullUrl = (endpoint.indexOf(apiHost) === -1) ? apiHost + endpoint : endpoint

  const headers = new Headers()
  // headers.append('Authorization', token)
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json')

  return fetch(fullUrl, {
    method: httpMethod,
    headers,
  })
  .then(response => response.json()
  .then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json)
    }

    const camelizedJson = camelizeKeys(json)

    return Object.assign({},
      normalize(camelizedJson, responseSchema))
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

export function apiClient(action:Action) {

  switch (action.type) {
    case TagRepository.TAG.FIND_ALL.TRIGGER:

      const result = callApi('/tags', HTTP_METHOD.GET, tagArraySchema)

      return result
    default:
      console.log("make apiClient request: ", action)

  }
}

