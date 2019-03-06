import React from 'react'
import Route from 'react-router/es/Route'
import Redirect from 'react-router/es/Redirect'
import { useAuth } from '../hooks/useReducer'

/**
 * Check if the current user is already logged in. If he is authenticated, auto redirect to Admin Home page (/admin/)
 * It is different from the PublicRoute which can be accessed by any one at any time
 * @param Component
 * @param rest
 * @returns {*}
 * @constructor
 */
export function NonAuthenticatedRoute({ component: Component, ...rest }) {
  const { authenticated } = useAuth()
  console.log("NonAuthenticatedRoute: authenticated,component:", authenticated, Component)
  return (
    <Route
      {...rest}
      render={props => authenticated ? (
        <Redirect to={{ pathname: "/admin", state: { from: props.location } }}/>
      ) : (
        <Component {...props}/>
      )
      }
    >
    </Route>
  )
}
