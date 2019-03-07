// @flow
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware, { END } from 'redux-saga'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import createRootReducer from '../reducers'
import type { Store } from '../types'

export const history = createBrowserHistory()
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ["auth","localeState","pageState","tagsState","sidebarMenuState","topbarMenuState","secondTopbarState","notificationDrawerState","tagsState","todos"]
}

export default function configureStore(preloadedState:any):Store{
  const sagaMiddleware = createSagaMiddleware()
  const rootReducer = createRootReducer(history)
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(
    persistedReducer, // root reducer with router state
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

  const persistor = persistStore(store)

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)


  return { store, persistor }
}

export const { store, persistor} = configureStore()
