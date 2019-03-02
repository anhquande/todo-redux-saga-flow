

export const styles = theme => {
  console.log("DEBUG.APP.THEME = ", theme)
  return {
    root: {
      display: 'flex',
    },
    appBar: {
      paddingLeft: 0,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'padding'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      paddingLeft: 0,
      width: `calc(100% - ${theme.app.drawer.maxWidth}px)`,
      transition: theme.transitions.create(['width', 'padding'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 4,
      marginRight: 4,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: theme.app.drawer.maxWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: theme.app.drawer.maxWidth,
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
        width: theme.spacing(7),
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 0px',
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },

    // Toolbar
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },

    grow: {
      flexGrow: 1,
    },

    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  } // return
} // styles
