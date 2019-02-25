// @flow
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'

export function AppHeader(){
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" color="inherit" className="toolbar-header">
          Todos
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>

  )
}
