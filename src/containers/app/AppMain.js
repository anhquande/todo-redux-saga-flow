import React from 'react'
import routes from '../../routes'
import { useClasses } from '../../hooks/useClasses'

const styles = theme => {
  return {
    toolbar: {
      minHeight:48,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 0px',
      ...theme.mixins.toolbar,
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
        <div className={classes.toolbar}/>
        <div className={classes.toolbar}/>
        { routes }
      </main>
  )
}
