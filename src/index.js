import React from 'react'
import ReactDOM from 'react-dom'
import { StoreContext } from 'redux-react-hook'

import blue from '@material-ui/core/colors/blue'
import { ThemeProvider } from '@material-ui/styles'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { history, persistor, store } from './store'
import * as serviceWorker from './serviceWorker'
import createAppTheme from './themes/createAppTheme'
import './i18n'
import { App } from './containers/app/index'
import rootSaga from './sagas'
import 'typeface-roboto'

const themeOptions = {
  palette: {
    primary: blue,
  },
  spacing: 8
}

const theme = createAppTheme(themeOptions)

store.runSaga(rootSaga)

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <App/>
          </ThemeProvider>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </StoreContext.Provider>
  ,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
