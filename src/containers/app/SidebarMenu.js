import React from 'react'
import List from '@material-ui/core/List'
import { useSidebarMenuState } from '../../hooks/useReducer'
import { ListItemLink } from '../../components/ListItemLink'

export function SidebarMenu() {

  const { sidebarMenu } = useSidebarMenuState()

  return (
    <List>
      {sidebarMenu
      .filter(item => item.visible)
      .map(item => (
        <ListItemLink key={item.to}
                      to={item.to}
                      primary={item.title}
                      secondary={item.subTitle}
                      icon={item.icon}/>
      ))}
    </List>
  )
}
