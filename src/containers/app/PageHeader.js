import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import { usePageState } from '../../hooks/useReducer'

export function PageHeader({classes}) {

  const pageState = usePageState()

  useEffect(()=>{
    document.title=pageState.tabHeader
  }, [pageState.tabHeader])

  return (
    <>
      <Typography variant="h6" color="inherit" noWrap className={classes.title}>
        {pageState.pageHeader}
      </Typography>
    </>
  )
}
