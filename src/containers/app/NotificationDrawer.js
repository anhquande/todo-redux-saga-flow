import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import classNames from 'classnames'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import { useDispatch } from 'redux-react-hook'
import { SidebarMenu } from './SidebarMenu'
import { useNotificationDrawerState } from '../../hooks/useReducer'
import { toggleSidebarMenu } from '../../actions/sidebarMenu'
import { useClasses } from '../../hooks/useClasses'
import { hideNotificationDrawer } from '../../actions/notificationDrawer'
import { NotificationMenu } from './NotificationMenu'

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
export function NotificationDrawer() {

  const classes = useClasses(styles)

  const { notificationDrawerOpen } = useNotificationDrawerState()

  const dispatch = useDispatch()

  return (
    <Drawer
      anchor="right"
      open={notificationDrawerOpen}
      onClose={()=>dispatch(hideNotificationDrawer())}
    >
      <NotificationMenu/>
    </Drawer>
  ) // renderDrawer
}
