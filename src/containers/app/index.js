// @flow
import React, { useContext, useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { StoreContext, useDispatch } from 'redux-react-hook'
import MailIcon from '@material-ui/icons/Mail'
import classNames from 'classnames'
import MenuItem from '@material-ui/core/MenuItem'
import Badge from '@material-ui/core/Badge'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import { useClasses } from '../../hooks/useClasses'
import { useLayout } from '../../hooks/useReducer'
import { styles } from './styles'
import { GlobalSearchBar } from './GlobalSearchBar'
import { AppDrawer } from './AppDrawer'
import { AppMain } from './AppMain'
import { PageHeader } from './PageHeader';

// Change the css injection order so that our style can override the built-in css
// How to do it?
// 1) Dynamically append an HTML comment <!-- jss-insertion-point --> right before the end tag </head>
// 2) create jss with insertionPoint: 'jss-insertion-point'
// 3) Wrap the app with <JssProvider>
// Learn more at : https://material-ui.com/customization/css-in-js/#css-injection-order
const styleNode = document.createComment("jss-insertion-point")
document.head.appendChild(styleNode, document.head.lastChild)

const generateClassName = createGenerateClassName()
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  // insertionPoint: document.getElementById('jss-insertion-point2'),
  insertionPoint: 'jss-insertion-point',
})
// end of css-injection-order

export function App() {
  const layout = useLayout()
  const dispatch = useDispatch()
  const store = useContext(StoreContext)
  console.log("DEBUG.APP.store = ",store)
  console.log("DEBUG.APP.state = ",store.getState())
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const classes = useClasses(styles)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  function handleToggleDrawer() {
    setOpen(!open)
  }

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

  const renderDesktopMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon/>
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon/>
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton color="inherit">
          <AccountCircle/>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  ) // renderMobileMenu

  const renderDesktopSection = (
    <div className={classes.sectionDesktop}>
      <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
          <MailIcon/>
        </Badge>
      </IconButton>
      <IconButton color="inherit">
        <Badge badgeContent={17} color="secondary">
          <NotificationsIcon/>
        </Badge>
      </IconButton>
      <IconButton
        aria-owns={isMenuOpen ? 'material-appbar' : undefined}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircle/>
      </IconButton>
    </div>
  ) // renderDesktopSection

  const renderMobileSection = (
    <div className={classes.sectionMobile}>
      <IconButton aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
        <MoreIcon/>
      </IconButton>
    </div>
  ) // renderMobileSection

  const renderToggleMenuIcon = (
    <IconButton
      color="inherit"
      aria-label="Open drawer"
      onClick={() => handleToggleDrawer()}
      className={classNames(classes.menuButton, {
        // [classes.hide]: open,
      })}
    >
      <MenuIcon/>
    </IconButton>
  ) // renderToggleMenuIcon

  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>

      <div className={classNames(classes.root)}>

        <AppBar position="fixed"
                className={classNames(classes.appBar, {
                  [classes.appBarShift]: open,
                })}
        >
          <Toolbar disableGutters={!open} className={classes.toolbar}>
            {renderToggleMenuIcon}
            <PageHeader classes={classes}/>
            <div className={classes.grow}/>
            <GlobalSearchBar classes={classes}/>
            {renderDesktopSection}
            {renderMobileSection}
          </Toolbar>
        </AppBar>
        {renderDesktopMenu}
        {renderMobileMenu}

        <AppDrawer classes={classes} open={open} handleToggleDrawer={handleToggleDrawer}/>

        <AppMain classes={classes}/>
      </div>
    </JssProvider>
  ) // return
} // App
