import React, { useEffect } from 'react'
import { useDispatch } from 'redux-react-hook'
import { setPageHeader } from '../actions/page'

export function HelpMe(props) {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setPageHeader("Help me"))
  })
  return (
    <>
      HelpMe: [TODO] To be implemented
    </>
  )
}
