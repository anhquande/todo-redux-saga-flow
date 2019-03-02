import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'

export function TopbarMobileMenu( {
                                    mobileMoreAnchorEl,
                                    isMobileMenuOpen,
                                    handleMenuClose,
                                    handleMobileMenuClose,
                                    handleProfileMenuOpen
                                  }) {
  return (
    <>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={2} color="secondary">
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
      </Menu>    </>
  )
}
