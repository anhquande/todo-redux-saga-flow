import React from 'react'
import List from '@material-ui/core/List'
import classNames from 'classnames'
import { useAuth, useSidebarMenuState } from '../../hooks/useReducer'
import { ListItemLink } from '../../components/ListItemLink'
import { useClasses } from '../../hooks/useClasses'
import { hasAccess } from '../../utils/securityUtils'

const styles = theme => {
  return {
    menuSectionHeader: {
      fontSize: '0.9rem',
      fontFamily: theme.typography.fontFamily,
      color: theme.app.color.menu.section.header.color,
      backgroundColor: theme.app.color.menu.section.header.backgroundColor,
      marginTop: theme.spacing(2),
      marginBottom: 0,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    menuSectionHeaderOpen: {
      display: 'inherit',
    },
    menuSectionHeaderClose: {
      display: 'none',
    }
  }
}
export function SidebarMenu() {

  const { sidebarMenu, sidebarMenuOpen } = useSidebarMenuState()

  console.log("sidebarMenu: ",sidebarMenu)
  const classes = useClasses(styles)

  const auth = useAuth()

  function renderSection(section) {
    return (
      <section key={section.id}>
        <div className={classNames(classes.menuSectionHeader,
          {
            [classes.menuSectionHeaderOpen]: sidebarMenuOpen,
            [classes.menuSectionHeaderClose]: !sidebarMenuOpen
          })}>{section.header}</div>

        <List>
          {section.menuItems
          .filter(item => item.visible && hasAccess(auth, item.hasAnyRole))
          .map(item => (
            <ListItemLink key={item.id}
                          to={item.to}
                          component={item.component}
                          primary={item.title}
                          secondary={item.subTitle}
                          icon={item.icon}/>
          ))}
        </List>
      </section>
    )
  }

  return (
    <div>
      {sidebarMenu
      .filter(section => {
        return section.visible && hasAccess(auth, section.hasAnyRole)
      })
      .map(section => renderSection(section))
      }
    </div>

  )
}
