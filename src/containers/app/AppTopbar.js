import React, { useState } from 'react'
import classNames from 'classnames'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import { PageHeader } from './PageHeader'
import { GlobalSearchBar } from './GlobalSearchBar'
import { TopbarMobileMenu } from './TopbarMobileMenu'
import { MyAccountPopupMenu } from './MyAccountPopupMenu'
import { TopbarDesktopMenu } from './TopbarDesktopMenu'
import { ToggleMenuButton } from './ToggleMenuButton'
import { MoreMobileMenuButton } from './MoreMobileMenuButton'
import { useSidebarMenuState } from '../../hooks/useReducer'

export function AppTopbar({
                            classes,
                            renderMyAccountMenu,
                            isMobileOpen,
                          }) {

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
          <ToggleMenuButton classes={classes}/>

          <PageHeader classes={classes}/>

          <div className={classes.grow}/>

          <GlobalSearchBar/>

          <TopbarDesktopMenu
            classes={classes}
            handleProfileMenuOpen={handleProfileMenuOpen}
            isMenuOpen={isMenuOpen}/>

          <MoreMobileMenuButton classes={classes} handleMobileMenuOpen={handleMobileMenuOpen}/>
        </Toolbar>
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
