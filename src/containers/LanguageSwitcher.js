import React, { useEffect } from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { useDispatch } from 'redux-react-hook'
import InputBase from '@material-ui/core/InputBase'
import withStyles from '@material-ui/core/styles/withStyles'
import { useTranslation } from 'react-i18next'
import { useLocaleState } from '../hooks/useReducer'
import { useClasses } from '../hooks/useClasses'
import { changeLocale } from '../types/locale'


const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 0,
    position: 'relative',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: 16,
    width: 'auto',
    padding: '0px 26px 0px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: '0 0 0 0.1rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase)

const styles = theme => ({
  selectLang: {
    color: theme.app.color.sidebar.menuItem.color,
    width:"100%",
  },
})

export function LanguageSwitcher() {

  const { t, i18n } = useTranslation()

  const classes = useClasses(styles)
  const { locale, visibleLocales } = useLocaleState()
  const dispatch = useDispatch()

  useEffect( ()=>{
    i18n.changeLanguage(locale)
  },[])

  function handleChange(e) {
    i18n.changeLanguage(e.target.value)
    dispatch(changeLocale({ locale: e.target.value }))
  }

  return (
    <>
      <Select
        value={locale}
        onChange={handleChange}
        displayEmpty
        name="lang"
        className={classes.selectLang}
        input={<BootstrapInput name="lang" id="lang-customized-select"/>}
      >
        {visibleLocales && visibleLocales.map(lang => {
          return (
            <MenuItem value={lang} key={lang}>{t(`languages:${lang}`)}</MenuItem>
          )
        })}
      </Select>
    </>
  )
}
