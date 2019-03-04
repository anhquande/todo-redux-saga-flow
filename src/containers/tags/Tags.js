import React, { useEffect, useState } from 'react'
import { useDispatch } from 'redux-react-hook'
import { useTranslation } from 'react-i18next'
import { lighten } from '@material-ui/core/styles/colorManipulator'
import classNames from 'classnames'
import FilterListIcon from '@material-ui/icons/FilterList'
import DeleteIcon from '@material-ui/icons/Delete'
import { useTags } from '../../hooks/useReducer'
import { setPageHeader } from '../../actions/page'
import type { TagsState } from '../../repository/tag/types'
import { getTagIds, getVisibleTags } from '../../repository/tag/selectors'
import { TagRepository } from '../../repository/tag/repository'
import EnhancedTable from '../../components/EnhancedTable'
import { useClasses } from '../../hooks/useClasses'

const styles = theme => ({
  rowSelected:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  rowEven:
    {
      color: theme.palette.secondary.main,
      backgroundColor: lighten(theme.palette.secondary.light, 0.85),
    },
  rowOdd: {
    color: theme.palette.secondary.main,
    backgroundColor: lighten(theme.palette.primary.light, 0.85),
  },
  rowHighlight:
    {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.primary.dark,
    },
  rowOnly:
    {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.primary.dark,
    },
  rowFirst:
    {
      color: theme.palette.text.error,
      backgroundColor: theme.palette.primary.dark,
    },
  rowLast:
    {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.primary.dark,
    },

})

export function Tags() {
  const classes = useClasses(styles)

  const { t, i18n } = useTranslation()

  const tagsState: TagsState = useTags()

  const dispatch = useDispatch()

  const allTagIds = getTagIds(tagsState)
  const visibleTags = getVisibleTags(tagsState)
  const [header, setHeader] = useState("")

  const { loading } = tagsState

  useEffect(() => {
    const countNewTags = visibleTags && visibleTags.length
    const countTotal = allTagIds && allTagIds.length
    setHeader(`Tags (${countNewTags}/${countTotal})`)
    dispatch(setPageHeader(header, header))
  }, [allTagIds, visibleTags])

  useEffect(() => {
    dispatch(TagRepository.TAG.FIND_ALL.trigger())
  }, [])

  function handleSubmit(name) {
    // TODO: dispatch(createTag(name))
  }

  const usagesRenderer = (row, col) => {
    if (row.usages === 0) {
      return (
        <div style={{ color: 'red' }}>ununsed</div>
      )
    }

    return row.usages
  }

  function handleSearch(searchTerm) {
  }

  const rowClass = (row, rowIndex, isRowSelected, selectedRows, visibleRows, tableClasses) => {

    const isFirstRow = rowIndex === 0
    const isLastRow = rowIndex === (visibleRows ? visibleRows.length - 1 : 0)
    const isOnlyRow = (visibleRows ? visibleRows.length === 1 : false)
    const isOddRow = rowIndex % 2
    const isEvenRow = !isOddRow

    const className = classNames({
      [classes.rowOnly]: isOnlyRow,
      [classes.rowEven]: isEvenRow,
      [classes.rowOdd]: isOddRow,
      // [classes.rowSelected]: isRowSelected,
      [classes.rowLast]: isLastRow,
      [classes.rowFirst]: isFirstRow,
    })

    return className
  }

  const columns = [
    {
      field: 'name',
      cellOptions: { align: 'left', component: "th", scope: "row", padding: "none" },
      disablePadding: true,
      label: 'Name'
    },
    {
      field: 'usages',
      headerOptions: { align: 'right' },
      cellOptions: { align: 'right' },
      disablePadding: false,
      label: 'Usages',
      cellRenderer: usagesRenderer
    }
  ]

  const handleFilter = (e) => {
  }
  const handleDelete = (e) => {
  }

  const toolbarActions = [

    {
      renderOrder: 1,
      key: 'action_delete',
      label: "Filter",
      icon: <DeleteIcon/>,
      onClick: handleDelete,
      canVisible: (numSelected) => numSelected > 0
    },
    {
      renderOrder: 2,
      key: 'action_filter',
      label: "Filter",
      icon: <FilterListIcon/>,
      onClick: handleFilter,
      canVisible: () => true
    },
  ]

  return (
    <>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <EnhancedTable data={visibleTags}
                           columns={columns}
                           defaultOrderBy="usages"
                           defaultOrderDirection="asc"
                           selectionMode="multiple"
                           rowClass={rowClass}
                           handleSearch={handleSearch}
                           toolbarActions={toolbarActions}
            />
          </div>
        )}

      </div>
    </>
  )
}
