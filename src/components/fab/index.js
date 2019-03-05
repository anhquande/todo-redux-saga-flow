import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import green from '@material-ui/core/colors/green'
import { useClasses } from '../../hooks/useClasses'

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),

    color: theme.palette.common.white,
    backgroundColor: theme.app.color.link.normal,
    '&:hover': {
      backgroundColor: theme.app.color.link.normal,
    },
  },
})

export function FloatingActionButtonAdd() {
  const classes = useClasses(styles)
  return (
    <>
      <Fab className={classes.fab} color={'default'}>
        <AddIcon/>
      </Fab>

    </>
  )
}
