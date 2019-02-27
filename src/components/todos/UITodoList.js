// @flow
import React from 'react'
import List from '@material-ui/core/List'
import { UITodoItem } from './UITodoItem'

export function UITodoList({ items }) {
  console.log('UITodoList. items:',items)

  function renderList() {
    return (
      <>
        <List className="todo-list">
          {items.map(item => {
            console.log("map: item=", item)
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
