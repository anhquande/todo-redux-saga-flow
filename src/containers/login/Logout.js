import React, { useEffect } from 'react'
import Route from 'react-router/es/Route'
import Redirect from 'react-router/es/Redirect'
import { useDispatch } from 'redux-react-hook'
import { LogOutRoutine } from '../../repository/auth/routines'

export function Logout() {

  const dispatch = useDispatch()

  useEffect( ()=>{
    console.log("Logout is loaded")
    dispatch(LogOutRoutine.trigger())
  }, [])
  return (
    <Route
      render={props => (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }}/>
      )
      }
    >
    </Route>
  )
}
