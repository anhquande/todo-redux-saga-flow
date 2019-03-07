import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import Link from '@material-ui/core/Link'
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
      borderLeft: '3px solid #3c8dbc',
      textDecoration: 'none',
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

export function ListItemLink({ icon, primary, secondary, to, component:Component, linkOptions }) {
  const renderLink = itemProps => {
    if (to && to.startsWith("http")){
      return (
        <Link href={to} {...itemProps}{...linkOptions}>
          {itemProps.children}
        </Link>
      )
    }
    return (
      <RouterLink to={to} {...itemProps}{...linkOptions}/>
    )
  }
  const classes = useClasses(styles)
  return (
    <>
      {Component ? (
        <ListItem button component="li" className={classes.sidebarMenuItem}>
          <Component/>
        </ListItem>
      ) : (
        <ListItem button component={renderLink} className={classes.sidebarMenuItem}>
          <span className="activeMarker"/>
          {icon && (
            <Icon name={icon}/>
          )}
          <span className={classes.linkText}>{primary}</span>
        </ListItem>
      )}

    </>
  )
}
