// @flow
import React from 'react'
import List from '@material-ui/core/List'
import { UITodoItem } from './UITodoItem'

export function UITodoList({ items }) {

  function renderList() {
    return (
      <>
        <List className="todo-list">
          {items.map(item => {
            return (
              <UITodoItem item={item} key={item.id}/>
            )
          })}
        </List>
      </>
    )
  }

  if (items) {
    return renderList()
  }

  return (
    <div>
      EMPTY
    </div>
  )

}
