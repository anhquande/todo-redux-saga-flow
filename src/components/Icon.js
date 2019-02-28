// @flow
import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import HelpIcon from '@material-ui/icons/Help'
import ImprintIcon from '@material-ui/icons/ImportContacts'
import TodosIcon from '@material-ui/icons/ListAltOutlined'
import TagsIcon from '@material-ui/icons/Label'

export function Icon({name, ...options}) {
  if (name === 'todos') return (<TodosIcon {...options}/>)
  if (name === 'help') return (<HelpIcon {...options}/>)
  if (name === 'imprint') return (<ImprintIcon {...options}/>)
  if (name === 'search') return (<SearchIcon {...options}/>)
  if (name === 'more') return (<MoreIcon {...options}/>)
  if (name === 'notifications') return (<NotificationsIcon {...options}/>)
  if (name === 'accountCircle') return (<AccountCircleIcon {...options}/>)
  if (name === 'tags') return (<TagsIcon {...options}/>)

  return (<MoreIcon {...options}/>)

}
