// @flow
import React, { useState } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import ApprovedIcon from '@material-ui/icons/DoneAll'
import ShowAllIcon from '@material-ui/icons/AllInbox'
import { useDispatch } from 'redux-react-hook'
import { useTags } from '../../hooks/useReducer'
import type { Dispatch } from '../../types'
import { filterTag } from '../../actions/tags'
import { getFilter } from '../../repository/tag/selectors'

export function TagsFilter() {

  const tagsState = useTags()
  const tagsFilter = getFilter(tagsState)

  const [value, setValue] = useState(tagsFilter)

  const dispatch: Dispatch = useDispatch()

  function handleChange(event, v) {
    setValue(v)
    dispatch(filterTag(v))
  }

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
      >
        <BottomNavigationAction label="All" icon={<ShowAllIcon/>} value="SHOW_ALL"/>
        <BottomNavigationAction label="In use" icon={<ApprovedIcon/>} value="SHOW_IN_USE"/>
        <BottomNavigationAction label="Unused" icon={<ApprovedIcon/>} value="SHOW_UNUSED"/>
      </BottomNavigation>
    </div>
  )
}
