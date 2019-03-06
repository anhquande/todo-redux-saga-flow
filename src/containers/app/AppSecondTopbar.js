import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
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
      display: 'flex',
      color: theme.app.color.text,
      fontSize: '1rem',
      fontFamily: theme.typography.fontFamily,
      backgroundColor: theme.app.color.secondTopBar.backgroundColor,
      minHeight: 48,
      paddingLeft: 0,
      paddingRight: theme.spacing(2),
      lineHeight: '1rem'
    },
    iconWrapper: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    header: {
      fontWeight: 'bold',
    },
    badge: {
      top: '50%',
      right: -18,
      // The border color match the background color.
      border: `2px solid ${
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
        }`,
    },

  } // return
} // styles

export function AppSecondTopbar() {
  const classes = useClasses(styles)

  const { header, icon, menuItems } = useSecondTopbarState()

  const handleEvent = (event, item: MenuItemModel) => {

  }

  function renderActions() {

    return (
      <div className={classes.sectionDesktop}>
        {menuItems
        .filter(item => item.visibleOnDesktop)
        .map(item => (
          <div key={item.id}>
            <Button variant="outlined"
                    color="primary"
                    key={item.id}
                    onClick={(event) => handleEvent(event, item)}
            >
              <Icon name={item.icon}/>
              {item.badgeVisible ? (

                <Badge badgeContent={item.badge}
                       color="secondary"
                       max={99}
                       classes={{ badge: classes.badge }}>
                  {item.title}
                </Badge>
              ) : (
                <span>{item.title}</span>
              )}

            </Button>
          </div>
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
