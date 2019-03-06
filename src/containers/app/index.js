import React from 'react'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import { Route, Switch } from 'react-router'
import { useClasses } from '../../hooks/useClasses'
import { AppDrawer } from './AppDrawer'
import { AppMain } from './AppMain'
import { AppTopbar } from './AppTopbar'
import { NotificationDrawer } from './NotificationDrawer'
import { AuthenticatedRoute } from '../../routes/AuthenticatedRoute'
import { LoginPage } from '../login'
import { NoMatch } from '../NoMatch'
import { NonAuthenticatedRoute } from '../../routes/NonAuthenticatedRoute'
import { publicRoutes } from '../../routes'

// Change the css injection order so that our style can override the built-in css
// How to do it?
// 1) Dynamically append an HTML comment <!-- jss-insertion-point --> right before the end tag </head>
// 2) create jss with insertionPoint: 'jss-insertion-point'
// 3) Wrap the app with <JssProvider>
// Learn more at : https://material-ui.com/customization/css-in-js/#css-injection-order
const styleNode = document.createComment("jss-insertion-point")
document.head.appendChild(styleNode, document.head.lastChild)

const generateClassName = createGenerateClassName()
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  // insertionPoint: document.getElementById('jss-insertion-point2'),
  insertionPoint: 'jss-insertion-point',
})

// end of css-injection-order

export function App() {

  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      {publicRoutes}
    </JssProvider>
  ) // return
} // App
