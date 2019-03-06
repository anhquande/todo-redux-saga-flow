import React from 'react'
import Route from 'react-router/es/Route'
import Redirect from 'react-router/es/Redirect'
import { useAuth } from '../hooks/useReducer'

/**
 * Check if the current user has Permission (Role) to access the route.
 * If not, redirect to page /admin/404
 * @param Component
 * @param rest
 * @returns {*}
 * @constructor
 */
export function SecureRoute({ component: Component, hasAnyRole = "*",...rest }) {
  const hasPermission = true

  const auth = useAuth()
  console.log("Auth: ",auth)
  console.log("hasAnyRole: ",hasAnyRole)
  console.log("component: ",Component)
  return (
    <Route
      {...rest}
      render={props => hasPermission ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{ pathname: "/admin/404", state: { from: props.location } }}/>
      )
      }
    >
    </Route>
  )
}
