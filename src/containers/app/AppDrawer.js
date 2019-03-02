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

export function AppDrawer({ classes }) {

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
