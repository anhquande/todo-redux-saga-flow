import React, { useEffect } from 'react'
import { useDispatch } from 'redux-react-hook'
import Typography from '@material-ui/core/Typography'
import { setPageHeader } from '../actions/page'

export function PageNotFound() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setPageHeader("Page not found",""))
  })
  return (
    <>
      <Typography color="error" variant="h6">
      The page you were trying to reach could not be found. This could be because:
      </Typography>
      <ul>
        <li>The page does not exist</li>
        <li>The page exists, but you do not have permission to view it</li>
      </ul>
    </>
  )
}
