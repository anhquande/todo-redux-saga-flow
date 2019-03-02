import React from 'react'
import classNames from 'classnames'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import { useDispatch } from 'redux-react-hook'
import { toggleSidebarMenu } from '../../actions/sidebarMenu'

export function ToggleMenuButton({classes}) {
  const dispatch = useDispatch()

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={() => dispatch(toggleSidebarMenu())}
        className={classNames(classes.menuButton, {
          // [classes.hide]: open,
        })}
      >
        <MenuIcon/>
      </IconButton>
    </>
  )
}
