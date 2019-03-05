// @flow
import React, { useContext } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'
import { FormControl } from '@material-ui/core'
import { StoreContext } from 'redux-react-hook'
import { deleteTodo, updateTodoStatus } from '../../actions/todos'
import type { TodoItem } from '../../types/todos'

export function UITodoItem({item}:{item:TodoItem}) {

  const store = useContext(StoreContext)

  function handleChange(event, menuItem) {
    store.dispatch(updateTodoStatus(item.id, menuItem.props.value))
  }

  function renderItem(value: string) {
    if (value === 'new') return '🛈'
    if (value === 'todo') return '⌛'
    if (value === 'in progress') return '➣'
    if (value === 'done') return '✔'
    if (value === 'approved') return '☑'

    return ''
  }

  function handleDelete(event, id) {
    store.dispatch(deleteTodo(id))
  }

  return (
    <ListItem key={item.id} dense button>
      <FormControl>
        <Select
          value={item.status}
          onChange={handleChange}
          renderValue={renderItem}
          input={<Input id="name-error"/>}
        >
          <MenuItem value=""/>
          <MenuItem value="new">🛈 New</MenuItem>
          <MenuItem value="todo">⌛ Todo</MenuItem>
          <MenuItem value="in progress">➣ In progress</MenuItem>
          <MenuItem value="done">✔ Done</MenuItem>
          <MenuItem value="approved">☑ Approved</MenuItem>
        </Select>
      </FormControl>
      <ListItemText primary={item.content.title} secondary={item.content.note}/>
      <ListItemSecondaryAction>
        <IconButton aria-label="Comments" onClick={(e) => handleDelete(e, item.id)}>
          <DeleteIcon/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )

}
