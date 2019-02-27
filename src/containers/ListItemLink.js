import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Icon } from '../components/Icon'
import { useClasses } from '../hooks/useClasses'

const styles = theme => ({
  sidebarMenuItem: {
    color: theme.app.sidebar.menuItem.color,
    backgroundColor: theme.app.sidebar.menuItem.backgroundColor,

    '&:hover': {
      backgroundColor: theme.app.sidebar.menuItem.hover.backgroundColor,
      color: theme.app.sidebar.menuItem.hover.color,
    },
    '&.active': {
      backgroundColor: theme.app.sidebar.menuItem.active.backgroundColor,
      color: theme.app.sidebar.menuItem.active.color
    },

    text: {
      color: theme.app.sidebar.menuItem.color,
      backgroundColor: theme.app.sidebar.menuItem.backgroundColor,
    }
  }
})

export function ListItemLink({ icon, primary, secondary, to }) {
  const renderLink = itemProps => <RouterLink to={to} {...itemProps}/>
  const classes = useClasses(styles)
  return (
    <>
      <ListItem button component={renderLink} className={classes.sidebarMenuItem}>
        {icon && (
          <Icon name={icon}/>
        )}
        <ListItemText inset primary={primary} secondary={secondary} className={classes.sidebarMenuItem.text}/>
      </ListItem>
    </>
  )
}
