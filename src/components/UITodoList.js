// @flow
import React from 'react'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import { UITodoItem } from './UITodoItem'

export function UITodoList({ items }) {

  function renderList() {
    return (
      <Card>
        <List className="todo-list">
          {items.map(item => {
            console.log("map: item=", item)
            return (
              <UITodoItem item={item} key={item.id}/>
            )
          })}
        </List>
      </Card>
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
