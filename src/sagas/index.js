// REDUX SAGA
import { all } from 'redux-saga/effects'
import { debugSaga } from './debugSaga'
import repositorySagas from '../repository/repositorySagas'

export default function* rootSaga() {
  yield all([
    debugSaga(),
    ...repositorySagas,
  ])
}
