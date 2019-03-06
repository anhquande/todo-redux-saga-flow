import React from 'react'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import { useSidebarMenuState } from '../../hooks/useReducer'
import { useClasses } from '../../hooks/useClasses'
import { AppMainTopbar } from './AppMainTopbar'
import { AppSecondTopbar } from './AppSecondTopbar'

const styles = theme => {
  return {
    appBar: {
      backgroundColor: theme.app.color.topBar.backgroundColor,
      paddingLeft: 0,
      width: `100%`,

      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${theme.app.drawer.minWidth - 31}px)`,
      },
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'padding'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      paddingLeft: 0,
      width: `calc(100% - ${theme.app.drawer.maxWidth + 1}px)`,
      transition: theme.transitions.create(['width', 'padding'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  } // return
} // styles

export function AppTopbar() {
  const classes = useClasses(styles)

  const { sidebarMenuOpen } = useSidebarMenuState()

  return (
    <AppBar position="fixed"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: sidebarMenuOpen,
            })}>
      <AppMainTopbar/>
      <AppSecondTopbar/>
    </AppBar>
  )
}
