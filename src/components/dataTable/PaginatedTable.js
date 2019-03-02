import React from 'react'
import { DataTable } from './index'

export class PaginatedTable extends React.Component {
  state = {
    page: 1,
    perPage:
      (this.props.defaultPagination &&
        this.props.defaultPagination.rowsPerPage) ||
      10
  };

  render() {
    const { data, defaultPagination, ...props } = this.props
    const { page, perPage } = this.state

    const start = perPage * (page - 1)
    const pageData = data && data.slice(start, start + perPage)

    return (
      <DataTable
        data={pageData}
        pagination={{
          count: data ? data.length : 0,
          rowsPerPage: perPage,
          page: page - 1, // material-ui's <TablePagination /> is 0-based
          // rowsPerPageOptions: [5, 10, 25, 100, 1000],
          onChangePage: (e, page) => this.setState({ page: page + 1 }),
          onChangeRowsPerPage: e => this.setState({ perPage: e.target.value })
        }}
        {...props}
      />
    )
  }
}
