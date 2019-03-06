import React from 'react'
import Route from 'react-router/es/Route'
import Redirect from 'react-router/es/Redirect'
import { useAuth } from '../hooks/useReducer'

function hasAccess(auth, hasAnyRole){
  if (hasAnyRole && hasAnyRole==="*"){
    return true
  }

  if (hasAnyRole) {
    const myRoles = auth.grantedAuthorities
    if (myRoles){
      if (Array.isArray(hasAnyRole)){
        const match = hasAnyRole.filter(r=>myRoles.includes(r))
        if (match.length > 0){
          return true
        }
      }
    }
  }

  return false
}
/**
 * Check if the current user has Permission (Role) to access the route.
 * If not, redirect to page /admin/404
 * @param Component
 * @param rest
 * @returns {*}
 * @constructor
 */
export function SecureRoute({ component: Component, hasAnyRole = "*",...rest }) {
  const auth = useAuth()
  const hasPermission = hasAccess(auth, hasAnyRole)

  console.log("SecureRoute: hasPermission,component:", hasPermission, Component)

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
