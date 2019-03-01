import { call, fork, put, take } from 'redux-saga/effects'
import { TagRepository } from './repository'
import { apiClient } from '../apiClient'

const fetchData = TagRepository.TAG.FIND_ALL

function* fetchDataFromServer(payload) {
  try {
    // trigger request action
    yield put(fetchData.request(payload))
    // perform request to '/some_url' to fetch some data
    const {response, error} = yield call(apiClient, payload)

    if (error){
      yield put(fetchData.failure(error))
    }
    else{
      yield put(fetchData.success(response))
    }
  } catch (error) {
    yield put(fetchData.failure(error))

  } finally {
    // trigger fulfill action
    yield put(fetchData.fulfill())
  }
}


function* makeApiRequest(payload){
  yield call(fetchDataFromServer, payload)
}

export default function* requestWatcherSaga() {
  while(true) {
    console.log("Sagas TAG: Watching...")
    const payload = yield take(fetchData.TRIGGER)
    console.log("Sagas TAG: Catched...")

    yield fork(makeApiRequest, payload)
  }

}
