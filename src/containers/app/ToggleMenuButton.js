import React from 'react'
import classNames from 'classnames'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import { useDispatch } from 'redux-react-hook'
import { toggleSidebarMenu } from '../../actions/sidebarMenu'
import { useClasses } from '../../hooks/useClasses'

const styles = theme => {
  return {
    menuButton: {
      marginLeft: 4,
      marginRight: 4,
      color: theme.app.color.link.normal
    },
  } // return
} // styles

export function ToggleMenuButton() {
  const dispatch = useDispatch()
  const classes = useClasses(styles)

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
