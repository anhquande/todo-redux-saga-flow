// @flow
import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

export function TodoForm({ handleSubmit }) {

  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")

  function onSubmitClick(e) {
    e.preventDefault()
    handleSubmit(title, note)
    setTitle("")
    setNote("")
  }

  return (
    <>
      <form>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <TextField
            id="title"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
          />

          <TextField
            id="note"
            label="Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            margin="normal"
          />

          <Button variant="contained" color="primary"  aria-label="Add" onClick={onSubmitClick}>
            <AddIcon/> Save
          </Button>
        </Grid>
      </form>

    </>
  )
}
