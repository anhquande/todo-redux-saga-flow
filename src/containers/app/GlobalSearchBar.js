import React from 'react'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import { useTranslation } from 'react-i18next'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { useClasses } from '../../hooks/useClasses'

// The Material-UI's class names follow a simple pattern in development mode: Mui[component name]-[style rule name]-[UUID]
const styles = theme => {
  return {
    // Search
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: 'auto',
      '&:focus': {
        width: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(),
        width: 'auto',
        '&:focus': {
          width: '100%',
        },
      },
    },
    searchIcon: {
      width: theme.spacing(5),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchRoot: {
      color: 'inherit',
      width: '100%',
    },
    searchInput: {
      paddingTop: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(5),
      width: '100%',

      [theme.breakpoints.up('sm')]: {
        width: 100,
        '&:focus': {
          width: 500,
        },
        transition: theme.transitions.create(['width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),

      },
      transition: theme.transitions.create(['width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),

    },

  } // return
} // styles
export function GlobalSearchBar() {
  const classes = useClasses(styles)

  const { t } = useTranslation()

  const onSearchTermChange = (e) => {

    if (window.handleGlobalSearch){
      window.handleGlobalSearch(e.target.value)
    }
    return false
  }
  return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon/>
        </div>
        <InputBase
          type={t('placeHolder:search')}
          placeholder={t('placeHolder:search')}
          onChange={onSearchTermChange}
          classes={{
            root: classes.searchRoot,
            input: classes.searchInput,
          }}
        />
      </div>
  )
}
