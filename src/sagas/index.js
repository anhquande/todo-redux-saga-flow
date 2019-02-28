// REDUX SAGA
import { put, all } from 'redux-saga/effects'
import { debugSaga } from './debugSaga'

export default function* rootSaga() {
  const results = yield all([
    debugSaga(),
  ])
}
