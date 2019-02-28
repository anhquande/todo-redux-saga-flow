// @flow
import React from 'react'
import List from '@material-ui/core/List'
import { UITagItem } from './UITagItem'

export function UITagList({ items }) {
  console.log("UITagList: ",items)
  function renderList() {
    return (
      <>
        <List>
          {items.map(item => {

            return (
              <UITagItem item={item} key={item.id}/>
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
