import React from 'react'
import { secureRoutes } from '../../routes'
import { useClasses } from '../../hooks/useClasses'

const styles = theme => {
  return {
    toolbarPusher: {
      minHeight: theme.spacing(12),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 0px',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(0),
    },
  } // return
} // styles
export function AppMain() {

  const classes = useClasses(styles)

  return (
    <main className={classes.content}>
      <div className={classes.toolbarPusher}/>
      {secureRoutes}
    </main>
  )
}
