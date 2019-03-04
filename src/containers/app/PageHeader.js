import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import { usePageState } from '../../hooks/useReducer'
import { useClasses } from '../../hooks/useClasses'

const styles = theme => {
  return {
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      fontSize: theme.typography.h6.fontSize,
    },
  } // return
} // styles

export function PageHeader() {
  const classes = useClasses(styles)

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
