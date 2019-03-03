import React, { useState } from 'react'
import classNames from 'classnames'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Divider from '@material-ui/core/Divider'
import { PageHeader } from './PageHeader'
import { GlobalSearchBar } from './GlobalSearchBar'
import { TopbarMobileMenu } from './TopbarMobileMenu'
import { MyAccountPopupMenu } from './MyAccountPopupMenu'
import { TopbarDesktopMenu } from './TopbarDesktopMenu'
import { ToggleMenuButton } from './ToggleMenuButton'
import { MoreMobileMenuButton } from './MoreMobileMenuButton'
import { useSidebarMenuState } from '../../hooks/useReducer'
import { useClasses } from '../../hooks/useClasses'


const styles = theme => {
  return {
    grow: {
      flexGrow: 1,
    },
    appBar: {
      paddingLeft: 0,
      width: `calc(100% - ${theme.app.drawer.minWidth-17}px)`,

      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'padding'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      paddingLeft: 0,
      width: `calc(100% - ${theme.app.drawer.maxWidth}px)`,
      transition: theme.transitions.create(['width', 'padding'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 0px',
      ...theme.mixins.toolbar,
    },
  } // return
} // styles

export function AppTopbar() {
  const classes = useClasses(styles)

  const { sidebarMenuOpen } = useSidebarMenuState()

  const [anchorEl, setAnchorEl] = useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  return (
    <>
      <AppBar position="fixed"
              className={classNames(classes.appBar, {
                [classes.appBarShift]: sidebarMenuOpen,
              })}>

        <Toolbar disableGutters={!sidebarMenuOpen} className={classes.toolbar}>
          <ToggleMenuButton/>

          <PageHeader/>

          <div className={classes.grow}/>

          <GlobalSearchBar/>

          <TopbarDesktopMenu
            handleProfileMenuOpen={handleProfileMenuOpen}
            isMenuOpen={isMenuOpen}/>

          <MoreMobileMenuButton handleMobileMenuOpen={handleMobileMenuOpen}/>
        </Toolbar>
        <Divider/>
        <Toolbar/>
      </AppBar>

      <MyAccountPopupMenu
        isMenuOpen={isMenuOpen}
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
      />

      <TopbarMobileMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMenuClose={handleMenuClose}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
    </>
  )
}
