import React from 'react'
import Route from 'react-router/es/Route'
import Redirect from 'react-router/es/Redirect'
import { useAuth } from '../hooks/useReducer'

/**
 * Check if the current user is authenticated. It he is not, redirect to login page
 * It is different from the SecureRoute, which redirects to the admin home
 * @param Component
 * @param rest
 * @returns {*}
 * @constructor
 */
export function AuthenticatedRoute({ component: Component, ...rest }) {
  const {authenticated} = useAuth()
  console.log("AuthenticatedRoute: authenticated,component:", authenticated, Component)
  return (
    <Route
      {...rest}
      render={props => authenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }}/>
      )
      }
    >
    </Route>
  )
}
