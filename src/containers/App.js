// @flow
import React, { useContext, useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import { StoreContext, useDispatch } from 'redux-react-hook'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import classNames from 'classnames'
import MenuItem from '@material-ui/core/MenuItem'
import { fade } from '@material-ui/core/styles/colorManipulator'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { useClasses } from '../hooks/useClasses'
import { useLayout } from '../hooks/useReducer'
import routes from '../routes'


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

// The Material-UI's class names follow a simple pattern in development mode: Mui[component name]-[style rule name]-[UUID]
const styles = theme => {
  console.log("DEBUG.APP.THEME = ", theme)
  return {
    root: {
      display: 'flex',
    },
    appBar: {
      paddingLeft: 0,
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
    menuButton: {
      marginLeft: 4,
      marginRight: 4,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: theme.app.drawer.maxWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: theme.app.drawer.maxWidth,
    },
    drawerOpen: {
      width: theme.app.drawer.maxWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: 0,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 0px',
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },

    // Toolbar
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },

    grow: {
      flexGrow: 1,
    },

    // Search
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(9),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchRoot: {
      color: 'inherit',
      width: '100%',
    },
    searchInput: {
      paddingTop: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(9),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 220,
        '&:focus': {
          width: 400,
        },
      },
      transition: theme.transitions.create(['width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),

    },
    // !Search
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  } // return
} // styles

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

  const renderSearchBar = (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon/>
      </div>
      <InputBase
        type="search"
        placeholder="Search…"
        classes={{
          root: classes.searchRoot,
          input: classes.searchInput,
        }}
      />
    </div>
  ) // renderSearchBar

  /*

  function handleToggleDrawer() {
    dispatch(toggleDrawer())
    setOpen(!open)
  }


  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <AppBar position="fixed" className={classNames('app-bar',`drawer-${layout.drawerState}`)}>
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu"
                      onClick={handleToggleDrawer}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" color="inherit" className="toolbar-header">
            Todos {layout.drawerState} {layout.responsiveMode}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        className={classNames('app-drawer',`${layout.drawerState}`)}
      >
        <div>
          <IconButton onClick={handleToggleDrawer}>
            <ChevronRightIcon/>
          </IconButton>
        </div>
        <Divider/>
        <MenuList>
          <MenuItem component="a" href="/Test/ddkd">
            <ListItemIcon>
              <InboxIcon/>
            </ListItemIcon>
            <Typography variant="inherit">A short message</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <InboxIcon/>
            </ListItemIcon>
            <Typography variant="inherit">A very long text that overflows</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <InboxIcon/>
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              <a href="">
              A very long text that overflows
              </a>
            </Typography>
          </MenuItem>
        </MenuList>
      </Drawer>
    </>
  )

  */

  const renderHeaderTitle = (
    <Typography variant="h6" color="inherit" noWrap className={classes.title}>
      Mini variant drawer OPEN: {open ? 'OPEN' : 'CLOSE'}
    </Typography>
  ) // renderHeaderTitle

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

  const renderDrawer = (
    <Drawer
      variant="permanent"
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      open={open}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={()=>handleToggleDrawer()}>
          <ChevronLeftIcon/>
        </IconButton>
      </div>      <Divider/>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
            <ListItemText primary={text}/>
          </ListItem>
        ))}
      </List>
      <Divider/>
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
            <ListItemText primary={text}/>
          </ListItem>
        ))}
      </List>
    </Drawer>
  ) // renderDrawer

  const renderMainPageContent = (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      { routes }
    </main>
  ) // renderMainPageContent

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
            {renderHeaderTitle}
            <div className={classes.grow}/>
            {renderSearchBar}
            {renderDesktopSection}
            {renderMobileSection}
          </Toolbar>
        </AppBar>
        {renderDesktopMenu}
        {renderMobileMenu}

        {renderDrawer}

        {renderMainPageContent}
      </div>
    </JssProvider>
  ) // return
} // App
