import React, { useEffect, useState } from 'react'
import { useDispatch } from 'redux-react-hook'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import { useSecondTopbarState, useTags } from '../../hooks/useReducer'
import { setPageHeader } from '../../actions/page'
import type { TagsState } from '../../repository/tag/types'
import { getTagIds, getVisibleTags } from '../../repository/tag/selectors'
import { TagRoutines } from '../../repository/tag/repository'
import EnhancedTable from '../../components/EnhancedTable'
import { useClasses } from '../../hooks/useClasses'
import { FloatingActionButtonAdd } from '../../components/fab'
import {
  addSecondTopbarAction,
  clearSecondTopbarActions,
  setSecondTopbarHeader
} from '../../types/secondTopbar'
import { createTextMenuItem } from '../../types/menu'

const styles = theme => ({
  rowSelected:
    {
      color: theme.app.color.table.rowSelected.color,
      backgroundColor: theme.app.color.table.rowSelected.backgroundColor,
    },
  rowEven:
    {
      color: theme.app.color.table.rowEven.color,
      backgroundColor: theme.app.color.table.rowEven.backgroundColor,
    },
  rowOdd: {
    color: theme.app.color.table.rowOdd.color,
    backgroundColor: theme.app.color.table.rowOdd.backgroundColor,
  },
  rowHighlight:
    {
      color: theme.app.color.table.rowHighlight.color,
      backgroundColor: theme.app.color.table.rowHighlight.backgroundColor,
    },
  rowOnly:
    {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.primary.dark,
    },
  rowFirst:
    {
      borderTop: '1px solid #cacaca',
    },
  rowLast:
    {
      borderBottom: '1px solid #cacaca',
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
    dispatch(TagRoutines.FIND_ALL.trigger())
  }, [])

  // init
  useEffect(() => {
    dispatch(setSecondTopbarHeader({header: "Tags", icon:"tags"}))
    dispatch(clearSecondTopbarActions())
  }, [])

  const secondTopbarState = useSecondTopbarState()

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

  const rowClassName = (row, rowIndex, isRowSelected, selectedRows, visibleRows, tableClasses) => {

    const isFirstRow = rowIndex === 0
    const isLastRow = rowIndex === (visibleRows ? visibleRows.length - 1 : 0)
    const isOnlyRow = (visibleRows ? visibleRows.length === 1 : false)
    const isOddRow = rowIndex % 2
    const isEvenRow = !isOddRow

    const className = classNames({
      [classes.rowOnly]: isOnlyRow,
      [classes.rowEven]: isEvenRow,
      [classes.rowOdd]: isOddRow,
      [classes.rowLast]: isLastRow,
      [classes.rowFirst]: isFirstRow,
    })

    return className
  }

  const rowClasses = (row, rowIndex, isRowSelected, selectedRows, visibleRows, tableClasses) => {
    return {
      'selected': classes.rowSelected,
    }
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

  function selectedRowsChangeHandler(oldSelectedRows, newSelectedRows ) {
    console.log('selectedRowsChangeHandler : ', newSelectedRows)
    const hasSelected = newSelectedRows && newSelectedRows.length>0
    if (hasSelected) {
      console.log("add actions ")

      dispatch(addSecondTopbarAction(
        createTextMenuItem("TA_DELETE_TAGS",`Delete`, 'delete', '', {badgeVisible:true, badge:newSelectedRows.length})
      ))
    }
    else{

      console.log("clear actions ")
      dispatch(clearSecondTopbarActions())
    }
  }

  return (
    <>
      <div style={{marginBottom: 80}}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <EnhancedTable data={visibleTags}
                           columns={columns}
                           defaultOrderBy="usages"
                           defaultOrderDirection="asc"
                           selectionMode="multiple"
                           rowClassName={rowClassName}
                           rowClasses={rowClasses}
                           handleSearch={handleSearch}
                           selectedRowsChangeHandler={selectedRowsChangeHandler}
            />
            <FloatingActionButtonAdd/>
          </div>
        )}

      </div>
    </>
  )
}
