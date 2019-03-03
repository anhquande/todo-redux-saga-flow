// @flow

import React from 'react'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { NavLink as RouterLink } from 'react-router-dom'
import { useDispatch } from 'redux-react-hook'
import { useClasses } from '../../hooks/useClasses'
import { useTopbarMenuState } from '../../hooks/useReducer'
import { Icon } from '../../components/Icon'
import type { MenuItemModel } from '../../types/menu'

const styles = theme => {
  return {
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
  } // return
} // styles

export function TopbarDesktopMenu({ isMenuOpen, handleProfileMenuOpen }) {
  const classes = useClasses(styles)

  const { topbarMenu } = useTopbarMenuState()
  const renderLink = (to,itemProps) => <RouterLink to={to} {...itemProps}/>

  const dispatch = useDispatch()
  const handleEvent = (event, item:MenuItemModel) => {

    if (item.id === 'TM_ACCOUNT'){
      handleProfileMenuOpen(event)
    }
    console.log("event: ", event, item)
  }

  return (
    <div className={classes.sectionDesktop}>
      {topbarMenu
      .filter(item => item.visibleOnDesktop)
      .map(item => (
        <IconButton key={item.id} color="inherit" onClick={(event) => handleEvent (event,item)}

        >
          {item.badgeVisible ? (
            <Badge badgeContent={item.badge} color="secondary">
              <Icon name={item.icon}/>
            </Badge>
          ):(
            <Icon name={item.icon}/>
          )}
        </IconButton>
      ))}
    </div>
  )
}
