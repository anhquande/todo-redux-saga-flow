// @flow
import React, { useContext, useState } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { StoreContext } from 'redux-react-hook'
import { setVisibilityFilter } from '../actions/visibilityFilter'

export function AppFooter(){
  const [value, setValue] = useState()

  const store = useContext(StoreContext)

  function handleChange(event, v){
    setValue(v)
    console.log("AppFooter: ",event,v)
    store.dispatch(setVisibilityFilter(v))
  }
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon/>} value="SHOW_NEW"/>
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>} value="SHOW_DONE"/>
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>} value="SHOW_ALL"/>
    </BottomNavigation>
  )
}
