import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import { Icon } from './Icon'
import { useClasses } from '../hooks/useClasses'

const styles = theme => ({
  linkText: {
    fontSize: '1rem',
    fontFamily: theme.typography.fontFamily,
    paddingLeft: theme.spacing(1),

    '&:hover': {
      color: theme.app.sidebar.menuItem.hover.color,
    },
    '&.active': {
      color: theme.app.sidebar.menuItem.active.color
    },

  },
  primaryText: {
    color: theme.app.sidebar.menuItem.color,
  },
  secondaryText: {
    color: theme.app.sidebar.menuItem.color,
    // backgroundColor: theme.app.sidebar.menuItem.backgroundColor,
  },
  sidebarMenuItem: {
    paddingLeft: theme.spacing(1),
    color: theme.app.sidebar.menuItem.color,
    // backgroundColor: theme.app.sidebar.menuItem.backgroundColor,
    borderLeft: '3px solid transparent',

    '&:hover': {
      // backgroundColor: theme.app.sidebar.menuItem.hover.backgroundColor,
      color: theme.app.sidebar.menuItem.hover.color,
      borderLeft: '3px solid #3c8dbc'
    },
    '&.active': {
      // backgroundColor: theme.app.sidebar.menuItem.active.backgroundColor,
      color: theme.app.sidebar.menuItem.active.color,
      borderLeft: '3px solid #3c8dbc'
    },
    '& > span.activeMarker': {
      display: 'block',
      width: '3px',
      backgroundColor: theme.app.sidebar.menuItem.hover.color
    },

  }
})

export function ListItemLink({ icon, primary, secondary, to, linkOptions }) {
  const renderLink = itemProps => <RouterLink to={to} {...itemProps} {...linkOptions}/>
  const classes = useClasses(styles)
  return (
    <>
      <ListItem button component={renderLink} className={classes.sidebarMenuItem}>
        <span className="activeMarker"/>
        {icon && (
          <Icon name={icon}/>
        )}
        {/* <ListItemText inset primary={primary} secondary={secondary} className={classes.sidebarMenuItem.primary} */}
        {/* classes={{ textPrimary: classes.sidebarMenuItem.primary }} */}
        {/* primaryTypographyProps={{color:'textPrimary'}} */}
        {/* /> */}
        <span className={classes.linkText}>{primary}</span>
      </ListItem>
    </>
  )
}
