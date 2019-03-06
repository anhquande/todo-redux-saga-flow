import React from 'react'
import { useClasses } from '../../hooks/useClasses'
import { AppDrawer } from './AppDrawer'
import { AppTopbar } from './AppTopbar'
import { NotificationDrawer } from './NotificationDrawer'
import { AppMain } from './AppMain'

const styles = theme => {
  return {
    root: {
      display: 'flex',
    },
  } // return
} // styles
export function Admin(){
  const classes = useClasses(styles)

  return (
    <div className={classes.root}>
      <AppDrawer/>

      <AppTopbar/>

      <NotificationDrawer/>

      <AppMain/>
    </div>
  )
}
