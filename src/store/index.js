// @flow
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware, { END }  from 'redux-saga'
import logger from 'redux-logger'
import createRootReducer from '../reducers'
import type { Store } from '../types'

export const history = createBrowserHistory()

export default function configureStore(preloadedState):Store{
  console.log('configure store with preloadedState: ',preloadedState)

  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
        sagaMiddleware,

        // Note: logger must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions (#20).
        logger
      ),
    ),
  )

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)


  return store
}
