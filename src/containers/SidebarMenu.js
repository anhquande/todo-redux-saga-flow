import React from 'react'
import List from '@material-ui/core/List'
import type { SidebarMenuModel } from '../types/sidebarMenu'
import { ListItemLink } from './ListItemLink'

export function SidebarMenu() {

  const model: SidebarMenuModel = [
    { title: 'Todos', icon: 'todos', to: '/todos' },
    { title: 'Imprint', icon: 'imprint', to: '/imprint' },
    { title: 'Help', icon: 'help', to: '/help' },
  ]

  return (
    <>
      <List>
        {model.map((item, index) => (
          <ListItemLink key={item.to} to={item.to} primary={item.title} secondary={item.subTitle} icon={item.icon}/>
        ))}

      </List>
    </>
  )
}
