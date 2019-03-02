import React from 'react'
import MoreIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'
import { useClasses } from '../../hooks/useClasses'

const styles = theme => {
  return {
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  } // return
} // styles
export function MoreMobileMenuButton({ handleMobileMenuOpen }) {
  const classes = useClasses(styles)

  return (
    <div className={classes.sectionMobile}>
      <IconButton aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
        <MoreIcon/>
      </IconButton>
    </div>
  )
}
