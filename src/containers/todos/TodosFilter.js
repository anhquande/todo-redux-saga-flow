// @flow
import React, { useContext, useState } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import InProgressIcon from '@material-ui/icons/HourglassFull'
import DoneIcon from '@material-ui/icons/Check'
import TodoIcon from '@material-ui/icons/AccessAlarms'
import ApprovedIcon from '@material-ui/icons/DoneAll'
import NewIcon from '@material-ui/icons/NewReleases'
import ShowAllIcon from '@material-ui/icons/AllInbox'
import { StoreContext, useDispatch } from 'redux-react-hook'
import { setVisibilityFilter } from '../../actions/visibilityFilter'

export function TodosFilter() {
  const store = useContext(StoreContext)

  const [value, setValue] = useState(store.getState().visibilitiyFilter)

  const dispatch = useDispatch()

  function handleChange(event, v) {
    setValue(v)
    dispatch(setVisibilityFilter(v))
  }

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
      >
        <BottomNavigationAction label="All" icon={<ShowAllIcon/>} value="SHOW_ALL"/>
        <BottomNavigationAction label="New" icon={<NewIcon/>} value="SHOW_NEW"/>
        <BottomNavigationAction label="Todo" icon={<TodoIcon/>} value="SHOW_TODO"/>
        <BottomNavigationAction label="In progress"
                                icon={<InProgressIcon/>}
                                value="SHOW_IN_PROGRESS"/>
        <BottomNavigationAction label="Done" icon={<DoneIcon/>} value="SHOW_DONE"/>
        <BottomNavigationAction label="Approved" icon={<ApprovedIcon/>} value="SHOW_APPROVED"/>
      </BottomNavigation>
    </div>
  )
}
