// @flow
import React from 'react'
import type { Tag } from '../../repository/tag/types'

export function UITagItem( {item} : {item:Tag} ){

  return (
    <div>
      {item && (
        <>{item.name}</>
      )}

    </div>
  )

}
