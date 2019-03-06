import { call, fork, put, take } from 'redux-saga/effects'
import { apiClient } from './apiClient'
import { RepositoryMethodArray } from './baseRepository'

export function* fetchDataFromServer(routine, payload) {
  try {
    // trigger request action
    yield put(routine.request(payload))
    // perform request to '/some_url' to fetch some data
    const {response, error} = yield call(apiClient, payload)

    if (error){
      yield put(routine.failure(error))
    }
    else{
      yield put(routine.success(response))
    }
  } catch (error) {
    yield put(routine.failure(error))

  } finally {
    // trigger fulfill action
    yield put(routine.fulfill())
  }
}

export function* makeApiRequest(routine, payload){
  yield call(fetchDataFromServer, routine, payload)
}

export function* watch(routine) {
  while(true) {
    const payload = yield take(routine.TRIGGER)

    yield fork(makeApiRequest, routine, payload)
  }
}

export const watchRepository = (entityRepository) => {
  const routines = RepositoryMethodArray.reduce( (acc, current) => {
    acc.push(watch(entityRepository[current]))
    return acc
  }, [])

  return routines
}

