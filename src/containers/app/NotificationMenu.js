import React from 'react'
import List from '@material-ui/core/List'
import { useDispatch } from 'redux-react-hook'
import { useNotificationDrawerState } from '../../hooks/useReducer'
import { ListItemLink } from '../../components/ListItemLink'
import { useClasses } from '../../hooks/useClasses'
import { hideNotificationDrawer } from '../../actions/notificationDrawer'

const styles = theme => {
  return {
    list: {
      width:280,
    },

  } // return
} // styles
export function NotificationMenu() {

  const classes = useClasses(styles)

  const { notifications } = useNotificationDrawerState()

  const dispatch = useDispatch()

  return (
    <div className={classes.list}>
      <List>
        {notifications
        .filter(item => item.visible)
        .map(item => (
          <div onClick={()=>dispatch(hideNotificationDrawer())} key={item.to} role="presentation">
            <ListItemLink key={item.to}
                          to={item.to}
                          primary={item.title}
                          secondary={item.subTitle}
                          icon={item.icon}
            />
          </div>
        ))}
      </List>
    </div>
  )
}
