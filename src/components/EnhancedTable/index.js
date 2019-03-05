import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import SearchIcon from '@material-ui/icons/Search'
import { fade, lighten } from '@material-ui/core/styles/colorManipulator'
import InputBase from '@material-ui/core/InputBase'
import { useClasses } from '../../hooks/useClasses'


function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy)
}

const tableHeadStyles = theme => ({
  tableHead: {
    backgroundColor: '#e0e0e0',
    borderBottom: '1px solid #cacaca'
  },
  columnHeader: {
    fontSize: '1rem',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold'
  },
})

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, columns, selectionMode } = props
  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }

  const classes = useClasses(tableHeadStyles)

  return (
    <TableHead className={classes.tableHead}>
      <TableRow>
        {selectionMode !== 'none' && (
          <TableCell padding="checkbox" style={{ width: 52 }}>
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
        )}
        {columns.map(
          col => {
            const { headerOptions } = col
            return (
              <TableCell
                key={col.field}
                padding={col.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === col.field ? order : false}
                {...headerOptions}
              >
                <Tooltip
                  title="Sort"
                  placement="bottom-end"
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === col.field}
                    direction={order}
                    onClick={createSortHandler(col.field)}
                    className={classes.columnHeader}
                  >
                    {col.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            )
          },
          this,
        )}
      </TableRow>
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  columns: PropTypes.array.isRequired,
}

const styles = theme => ({
  root: {
    paddingRight: theme.spacing(),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    display: "flex",
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
  search: {
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(6),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing(),
    paddingRight: theme.spacing(),
    paddingBottom: theme.spacing(),
    paddingLeft: theme.spacing(6),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 100,
    },
    '&:hover': {
      borderBottom: '1px solid #cacaca',
      width: 360,
    },
    '&:focus': {
      borderBottom: '1px solid #777',
      width: 360,
    }
  },
})

const EnhancedTableToolbar = props => {
  const classes = useClasses(styles)
  const { numSelected } = props
  const { tableHeader } = props
  const { showSearch } = props
  const { handleSearch } = props
  const { toolbarActions } = props

  function renderSearch() {
    if (showSearch) {
      return (
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon/>
          </div>
          <InputBase
            placeholder="Search…"
            onChange={(e) => handleSearch && handleSearch(e.target.value)}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
      )
    }

    return null
  }

  const renderToolbarActions = () => {

    return (
      <>
        {toolbarActions && toolbarActions
        .filter(a => a.canVisible && a.canVisible(numSelected))
        .sort((a, b) => a.renderOrder - b.renderOrder)
        .map(a => {
          return (
            <Tooltip title={a.label} key={a.key}>
              <IconButton aria-label={a.label} onClick={a.onClick}>
                {a.icon}
              </IconButton>
            </Tooltip>
          )
        })}
      </>
    )

  }


  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            {tableHeader}
          </Typography>
        )}
      </div>
      <div className={classes.spacer}/>
      <div className={classes.actions}>
        {renderSearch()}
        {renderToolbarActions()}
      </div>
    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  tableHeader: PropTypes.string.isRequired,
}

const tableStyles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
})

function EnhancedTable({
                         data,
                         columns,
                         selectionMode = 'none',
                         tableHeader = '',
                         defaultSelected = [],
                         idColumn = 'id',
                         defaultOrderBy,
                         defaultOrderDirection = 'asc',
                         defaultRowsPerPage = 25,
                         rowsPerPageOptions = [10, 25, 50],
                         defaultPage = 0,
                         showSearch = true,
                         handleSearch,
                         toolbarActions = [],
                         toolbarVisible = false,
                         selectedRowsChangeHandler = null,
                         rowClassName,
                         rowClasses,
                       }) {
  const classes = useClasses(tableStyles)
  const [order, setOrder] = React.useState(defaultOrderDirection)
  const [orderBy, setOrderBy] = React.useState(defaultOrderBy)
  const [selectedRows, setSelectedRows] = React.useState(defaultSelected)
  const [page, setPage] = React.useState(defaultPage)
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage)

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc'
    setOrder(isDesc ? 'asc' : 'desc')
    setOrderBy(property)
  }

  function updateSelectedRows(newSelectedRows) {
    const oldSelectedRows = [...selectedRows]
    setSelectedRows(newSelectedRows)
    if (selectedRowsChangeHandler){
      selectedRowsChangeHandler(oldSelectedRows, newSelectedRows)
    }
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      const newSelecteds = data.map(n => n[idColumn])
      updateSelectedRows(newSelecteds)
      return
    }
    updateSelectedRows([])
  }

  function handleClick(event, id) {

    if (selectionMode === 'none') {
      event.preventDefault()
      return
    }
    const selectedIndex = selectedRows.indexOf(id)
    let newSelectedRows = []

    if (selectedIndex === -1) {
      newSelectedRows = newSelectedRows.concat(selectedRows, id)
    } else if (selectedIndex === 0) {
      newSelectedRows = newSelectedRows.concat(selectedRows.slice(1))
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelectedRows = newSelectedRows.concat(selectedRows.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelectedRows = newSelectedRows.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1),
      )
    }

    updateSelectedRows(newSelectedRows)
  }

  function handleChangePage(event, newPage) {
    setPage(newPage)
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value)
  }

  const isSelected = id => selectedRows.indexOf(id) !== -1

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)

  const visibleColumnsCounter = columns.filter(c => c.visible).size

  const renderCell = (curRow, curCol) => {
    if (curCol.cellRenderer) {
      return curCol.cellRenderer(curRow, curCol)
    }
    const { field } = curCol
    return curRow[field]
  }

  const visibleRows = stableSort(data, getSorting(order, orderBy))
  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  return (
    <div>
      {/* <Paper className={classes.root}> */}
      {toolbarVisible && (
        <EnhancedTableToolbar numSelected={selectedRows.length}
                              tableHeader={tableHeader}
                              toolbarActions={toolbarActions}
                              handleSearch={handleSearch}
                              showSearch={showSearch}/>
      )}

      <div className={classes.tableWrapper}>
        <Table className={classes.table} aria-labelledby="tableTitle">
          <EnhancedTableHead
            numSelected={selectedRows.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
            columns={columns}
            selectionMode={selectionMode}
          />
          <TableBody>
            {visibleRows
            .map((row, rowIndex) => {
              const isItemSelected = isSelected(row[idColumn])
              return (
                <TableRow
                  hover
                  onClick={event => handleClick(event, row[idColumn])}
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row[idColumn]}
                  selected={isItemSelected}
                  className={rowClassName ? rowClassName(row,
                    rowIndex,
                    isItemSelected,
                    selectedRows,
                    visibleRows,
                    classes) : ''}
                  classes={rowClasses ? rowClasses(row,
                    rowIndex,
                    isItemSelected,
                    selectedRows,
                    visibleRows,
                    classes) : {}
                  }
                >
                  {selectionMode !== 'none' && (
                    <TableCell padding="checkbox" role="checkbox" key="checkbox">
                      <Checkbox checked={isItemSelected}/>
                    </TableCell>
                  )}
                  {columns && columns.map(col => {
                    const { field, cellOptions } = col
                    return (
                      <TableCell {...cellOptions} key={field}>
                        {renderCell(row, col)}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 49 * emptyRows }}>
                <TableCell colSpan={visibleColumnsCounter}/>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      {/* </Paper> */}
    </div>
  )
}

EnhancedTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
}
export default EnhancedTable
