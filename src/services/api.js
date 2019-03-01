import { schema, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'

const API_ROOT = 'http://localhost:8080/'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(endpoint, responseSchema) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

  return fetch(fullUrl)
  .then(response =>
    response.json().then(json => ({ json, response }))
  ).then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json)
    }

    const camelizedJson = camelizeKeys(json)

    return Object.assign({},
      normalize(camelizedJson, responseSchema))
  })
  .then(
    response => ({response}),
    error => ({error: error.message || 'Something bad happened'})
  )

}

// Schemas for Github API responses.
const tagSchema = new schema.Entity('tags', {
  idAttribute: 'id',
})

const tagSchemaArray = new schema.Array(tagSchema)
export const fetchTag = id => callApi(`tags/${id}`, tagSchema)
export const fetchTagList = () => callApi(`tags`, tagSchemaArray)
