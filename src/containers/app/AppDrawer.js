import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

import Avatar from '@material-ui/core/Avatar' // Import using relative path
import { SidebarMenu } from './SidebarMenu'
import { useAuth, useSidebarMenuState } from '../../hooks/useReducer'
import { useClasses } from '../../hooks/useClasses'
import Logo from '../../resources/images/logo.png' // Import using relative path
import LogoSmall from '../../resources/images/logo-small.png'
import MyAvatar from '../../resources/images/avatar.png'
import { Icon } from '../../components/Icon'

const styles = theme => {
  return {
    avatarRoot: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(3),
    },
    avatarRootOpen: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    avatarRootClose: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    avatar: {},
    avatarOpen: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
    avatarClose: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    link: {
      color: theme.app.color.link.normal,
      fontSize: '1rem',
      fontFamily: theme.typography.fontFamily,
      textDecoration: 'none',
    },
    logoRoot: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    logoRootOpen: {
      paddingLeft: theme.spacing(2),
    },
    logoRootClose: {
      paddingLeft: theme.spacing(1),
    },
    logo: {
      display: 'block',
      height: 26,
      backgroundRepeat: 'no-repeat',
    },
    logoOpen: {
      backgroundImage: `url(${LogoSmall})`,
      [theme.breakpoints.up('sm')]: {
        backgroundImage: `url(${Logo})`,
      },
    },
    logoClose: {
      backgroundImage: `url(${LogoSmall})`,
      [theme.breakpoints.up('sm')]: {
        backgroundImage: `url(${LogoSmall})`,
      },
    },
    drawer: {},
    drawerPaper: {
      width: theme.spacing(5) + 2,

      // width: theme.app.drawer.maxWidth,
      backgroundColor: theme.app.sidebar.menuItem.backgroundColor,
    },
    drawerOpen: {
      width: theme.app.drawer.maxWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: 0,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(5) + 2,
      },
    },
    toolbar: {
      minHeight: 48,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 0px',
      ...theme.mixins.toolbar,
    },
    logoutIcon: {
      position: 'relative',
      top: '4px'
    },

    profileLink: {},
    profileLinkOpen: {
      display: 'block',
    },
    profileLinkClose: {
      display: 'none',
    },

  } // return
} // styles
export function AppDrawer() {

  const classes = useClasses(styles)
  const { user } = useAuth()
  const { sidebarMenuOpen } = useSidebarMenuState()
  const LogOutLink = props => <RouterLink to="/logout" {...props}/>
  const MyAccountLink = props => <RouterLink to="/myaccount" {...props}/>

  return (
    <Drawer
      variant="permanent"
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: sidebarMenuOpen,
        [classes.drawerClose]: !sidebarMenuOpen,
      })}
      classes={{
        paper: classNames(classes.drawerPaper, {
          [classes.drawerOpen]: sidebarMenuOpen,
          [classes.drawerClose]: !sidebarMenuOpen,
        }),
      }}
      open={sidebarMenuOpen}
    >
      <div className={classNames(classes.logoRoot, {
        [classes.logoRootOpen]: sidebarMenuOpen,
        [classes.logoRootClose]: !sidebarMenuOpen,
      })}>
        <a href="/" title="Home"
           className={classNames(classes.logo, {
             [classes.logoOpen]: sidebarMenuOpen,
             [classes.logoClose]: !sidebarMenuOpen,
           })}
        >
        </a>
      </div>

      <div>
        <Grid container justify="flex-start" alignItems="flex-start">
          <Grid item className={classNames(classes.avatarRoot, {
            [classes.avatarRootOpen]: sidebarMenuOpen,
            [classes.avatarRootClose]: !sidebarMenuOpen,
          })}
          >
            <a href="/myaccount" title="Logout"
               className={classNames(classes.link)}>
              <Avatar alt="Remy Sharp" src={MyAvatar}
                      className={classNames(classes.avatar, {
                        [classes.avatarOpen]: sidebarMenuOpen,
                        [classes.avatarClose]: !sidebarMenuOpen,
                      })}
              />
            </a>
          </Grid>
          <Grid item xs={10} sm container justify="flex-start"
                className={classNames(classes.profileLink, {
                  [classes.profileLinkOpen]: sidebarMenuOpen,
                  [classes.profileLinkClose]: !sidebarMenuOpen,
                })}
          >
            <Grid item xs container direction="column" justify="flex-start">
              <Grid item xs>
                <a href="/myaccount" title="Logout"
                   className={classNames(classes.link)}
                >
                  {user.username}
                </a>
              </Grid>
              <Grid item>
                <Link component={LogOutLink} className={classNames(classes.link)}>
                  <Icon name="logout" fontSize="small" className={classes.logoutIcon}/> Logout
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <SidebarMenu/>

    </Drawer>
  ) // renderDrawer
}
