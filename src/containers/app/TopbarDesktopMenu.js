import React from 'react'
import MailIcon from '@material-ui/icons/Mail'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { useClasses } from '../../hooks/useClasses'

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

  return (
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
  )
}
