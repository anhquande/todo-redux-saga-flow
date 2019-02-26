// @flow
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import { useDispatch } from 'redux-react-hook'
import { useLayout } from '../hooks/useReducer'
import { toggleDrawer } from '../actions/layout'

export function AppHeader(){
  const layout = useLayout()
  const dispatch = useDispatch()
  function handleToggleDrawer(){
    dispatch(toggleDrawer())
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu"
                    onClick={handleToggleDrawer}
        >
          <MenuIcon/> {layout.drawerState} {layout.responsiveMode}
        </IconButton>
        <Typography variant="h6" color="inherit" className="toolbar-header">
          Todos
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>

  )
}
