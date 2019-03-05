import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import { ToggleMenuButton } from './ToggleMenuButton'
import { useClasses } from '../../hooks/useClasses'

const styles = theme => {
  return {
    grow: {
      flexGrow: 1,
    },
    secondTopBar: {
      backgroundColor: theme.app.color.secondTopBar.backgroundColor,
      minHeight: 48,
      paddingLeft:0,
      paddingRight:theme.spacing(1)
    },
  } // return
} // styles

export function AppSecondTopbar() {
  const classes = useClasses(styles)

  return (
    <>
      <Toolbar className={classes.secondTopBar}>
        <ToggleMenuButton/>

        <div className={classes.grow}/>

      </Toolbar>
    </>
  )
}
