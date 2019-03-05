import React, { useState } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import { PageHeader } from './PageHeader'
import { GlobalSearchBar } from './GlobalSearchBar'
import { TopbarDesktopMenu } from './TopbarDesktopMenu'
import { ToggleMenuButton } from './ToggleMenuButton'
import { MoreMobileMenuButton } from './MoreMobileMenuButton'
import { useSidebarMenuState } from '../../hooks/useReducer'
import { useClasses } from '../../hooks/useClasses'
import { MyAccountPopupMenu } from './MyAccountPopupMenu'
import { TopbarMobileMenu } from './TopbarMobileMenu'

const styles = theme => {
  return {
    grow: {
      flexGrow: 1,
    },
    toolbar: {
      minHeight: '48px',
      [theme.breakpoints.up('sm')]: {
        minHeight: '48px',
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 0px',
      ...theme.mixins.toolbar,
    },
  } // return
} // styles

export function AppMainTopbar() {
  const classes = useClasses(styles)

  const { sidebarMenuOpen } = useSidebarMenuState()

  const [anchorEl, setAnchorEl] = useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <>
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
