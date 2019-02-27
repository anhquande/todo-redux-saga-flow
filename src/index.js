import React from 'react'
import ReactDOM from 'react-dom'
import { StoreContext } from 'redux-react-hook'

import blue from '@material-ui/core/colors/blue'
import { ThemeProvider } from '@material-ui/styles'
import { App } from './containers/App'
import store from './store'
import * as serviceWorker from './serviceWorker'
import createAppTheme from './themes/createAppTheme'

const themeOptions = {
  palette: {
    primary: blue,
  },
  spacing: 8
}

const theme = createAppTheme(themeOptions)

ReactDOM.render(
    <StoreContext.Provider value={store}>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </StoreContext.Provider>
,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
