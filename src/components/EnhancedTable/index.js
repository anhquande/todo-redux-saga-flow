import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
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
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
import { lighten } from '@material-ui/core/styles/colorManipulator'


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

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, columns, selectionMode } = props
  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
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

const useToolbarStyles = makeStyles(theme => ({
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
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
}))

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles()
  const { numSelected } = props
  const { tableHeader } = props

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
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon/>
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon/>
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  tableHeader: PropTypes.string.isRequired,
}

const useStyles = makeStyles(theme => ({
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
}))

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
                         rowClass,
                       }) {
  const classes = useStyles()
  const [order, setOrder] = React.useState(defaultOrderDirection)
  const [orderBy, setOrderBy] = React.useState(defaultOrderBy)
  const [selected, setSelected] = React.useState(defaultSelected)
  const [page, setPage] = React.useState(defaultPage)
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage)

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc'
    setOrder(isDesc ? 'asc' : 'desc')
    setOrderBy(property)
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      const newSelecteds = data.map(n => n[idColumn])
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  function handleClick(event, id) {

    if (selectionMode === 'none') {
      event.preventDefault()
      return
    }
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }

    setSelected(newSelected)
  }

  function handleChangePage(event, newPage) {
    setPage(newPage)
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value)
  }

  const isSelected = id => selected.indexOf(id) !== -1

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
      <EnhancedTableToolbar numSelected={selected.length} tableHeader={tableHeader}/>
      <div className={classes.tableWrapper}>
        <Table className={classes.table} aria-labelledby="tableTitle">
          <EnhancedTableHead
            numSelected={selected.length}
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
            .map( (row, rowIndex) => {
              const isItemSelected = isSelected(row[idColumn])
              return (
                <TableRow
                  hover
                  onClick={event => handleClick(event, row[idColumn])}
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row[idColumn]}
                  selected={isItemSelected}
                  className={rowClass ? rowClass(row, rowIndex, isItemSelected, selected, visibleRows, classes) : ''}
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
