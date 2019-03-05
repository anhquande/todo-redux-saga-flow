import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import { useClasses } from '../../hooks/useClasses'
import { useSecondTopbarState } from '../../hooks/useReducer'
import { Icon } from '../../components/Icon'
import type { MenuItemModel } from '../../types/menu'

const styles = theme => {
  return {
    grow: {
      flexGrow: 1,
    },
    secondTopBar: {
      display:'flex',
      color:theme.app.color.text,
      fontSize: '1rem',
      fontFamily: theme.typography.fontFamily,
      backgroundColor: theme.app.color.secondTopBar.backgroundColor,
      minHeight: 48,
      paddingLeft: 0,
      paddingRight: theme.spacing(1),
      lineHeight: '1rem'
    },
    iconWrapper: {
      paddingLeft:theme.spacing(2),
      paddingRight:theme.spacing(2),
    },
    header: {
      fontWeight: 'bold',
    }
  } // return
} // styles

export function AppSecondTopbar() {
  const classes = useClasses(styles)

  const { header, icon, menuItems } = useSecondTopbarState()

  const handleEvent = (event, item:MenuItemModel) => {

  }

  console.log('AppSecondTopbar : ',header,icon,menuItems)

  function renderActions(){

    return (
      <div className={classes.sectionDesktop}>
        {menuItems
        .filter(item => item.visibleOnDesktop)
        .map(item => (
          <IconButton key={item.id} color="inherit" onClick={(event) => handleEvent (event,item)}

          >
            {item.badgeVisible ? (
              <Badge badgeContent={item.badge} color="secondary">
                <Icon name={item.icon}/>
              </Badge>
            ):(
              <Icon name={item.icon}/>
            )}
          </IconButton>
        ))}
      </div>
    )
  }
  return (
    <>
      <Toolbar className={classes.secondTopBar}>
        <div className={classes.iconWrapper}>
          <Icon name={icon}/>
        </div>
        <div className={classes.header}>
          {header}
        </div>

        <div className={classes.grow}/>
         {renderActions()}
      </Toolbar>
    </>
  )
}
