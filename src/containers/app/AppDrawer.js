import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import classNames from 'classnames'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import type { SidebarMenuModel } from '../../types/sidebarMenu'
import { ListItemLink } from '../../components/ListItemLink'

function SidebarMenu() {

  const model: SidebarMenuModel = [
    { title: 'Todos', icon: 'todos', to: '/todos' },
    { title: 'Tags', icon: 'tags', to: '/tags' },
    { title: 'Imprint', icon: 'imprint', to: '/imprint' },
    { title: 'Help', icon: 'help', to: '/help' },
  ]

  return (
    <>
      <List>
        {model.map((item, index) => (
          <ListItemLink key={item.to} to={item.to} primary={item.title} secondary={item.subTitle} icon={item.icon}/>
        ))}

      </List>
    </>
  )
}

export function AppDrawer({open, classes, handleToggleDrawer}) {
  return (
    <Drawer
      variant="permanent"
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: classNames(classes.drawerPaper,{
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
      </div>
      <Divider/>
      <SidebarMenu/>
    </Drawer>
  ) // renderDrawer
}
