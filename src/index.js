import React from 'react'
import ReactDOM from 'react-dom'
import { StoreContext } from 'redux-react-hook'

import blue from '@material-ui/core/colors/blue'
import { ThemeProvider } from '@material-ui/styles'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import configureStore, { history } from './store'
import * as serviceWorker from './serviceWorker'
import createAppTheme from './themes/createAppTheme'
import './i18n'
import { App } from './containers/App/index'

const themeOptions = {
  palette: {
    primary: blue,
  },
  spacing: 8
}

const theme = createAppTheme(themeOptions)

const store = configureStore()

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <App/>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  </StoreContext.Provider>
  ,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
