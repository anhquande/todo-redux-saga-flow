// @flow
import React from 'react'
import List from '@material-ui/core/List'
import { UITagItem } from './UITagItem'

export function UITagList({ items }) {
  console.log("UITagList: items= ",items)
  if (!items || items.size === 0) return (<></>)

  function renderList() {
    return (
      <>
        <List>
           {items.map( (item, index) => {
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
