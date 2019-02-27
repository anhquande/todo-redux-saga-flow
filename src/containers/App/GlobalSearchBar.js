import React from 'react'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import { useTranslation } from 'react-i18next'

export function GlobalSearchBar( {classes}) {
  const { t } = useTranslation()

  return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon/>
        </div>
        <InputBase
          type={t('placeHolder:search')}
          placeholder={t('placeHolder:search')}
          classes={{
            root: classes.searchRoot,
            input: classes.searchInput,
          }}
        />
      </div>
  )
}
