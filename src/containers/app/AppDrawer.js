import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import classNames from 'classnames'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import { useDispatch } from 'redux-react-hook'
import { SidebarMenu } from './SidebarMenu'
import { useSidebarMenuState } from '../../hooks/useReducer'
import { toggleSidebarMenu } from '../../actions/sidebarMenu'
import { useClasses } from '../../hooks/useClasses'

const styles = theme => {
  return {
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: theme.app.drawer.maxWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: theme.app.drawer.maxWidth,
      backgroundColor: theme.app.sidebar.menuItem.backgroundColor,
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
        width: theme.spacing(7),
      },
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
export function AppDrawer() {

  const classes = useClasses(styles)

  const { sidebarMenuOpen } = useSidebarMenuState()

  const dispatch = useDispatch()

  return (
    <Drawer
      variant="permanent"
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: sidebarMenuOpen,
        [classes.drawerClose]: !sidebarMenuOpen,
      })}
      classes={{
        paper: classNames(classes.drawerPaper, {
          [classes.drawerOpen]: sidebarMenuOpen,
          [classes.drawerClose]: !sidebarMenuOpen,
        }),
      }}
      open={sidebarMenuOpen}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={() => dispatch(toggleSidebarMenu())}>
          <ChevronLeftIcon/>
        </IconButton>
      </div>
      <Divider/>
      <SidebarMenu/>
    </Drawer>
  ) // renderDrawer
}
