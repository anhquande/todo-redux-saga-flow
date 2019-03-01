// @flow
import React from 'react'

export function UITagItem( {item} ){

  console.log("UITagItem : ",item)
  return (
    <div>
      {item && (
        <>{item.name}</>
      )}

    </div>
  )

}
