import React from 'react'
import MoreIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'

export function MoreMobileMenuButton({ classes, handleMobileMenuOpen }) {
  return (
    <div className={classes.sectionMobile}>
      <IconButton aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
        <MoreIcon/>
      </IconButton>
    </div>
  )
}
