import { connect } from 'react-redux'
import React, { Component } from 'react'
import { number, func, array, bool, string } from 'prop-types'
import { getDataFromApi, sortDataTable } from '../store/actions/getDataFromApi'
import DataTableRow from './DataTableRow'
import { tableSortingFields } from '../store/consts'

class SimpleDataTable extends Component {
  componentDidMount () {
    this.props.getDataFromApi(this.props.rows)
  }

  render () {
    return this.props.isLoading
      ? (<p>Загрузка...</p>)
      : (
        <table>
          <thead>
            <tr>
              {Object.entries(tableSortingFields).map(([key, value]) => {
                return (
                  <td
                    key={key} onClick={() => {
                      this.props.sortDataTable(key === this.props.sortingBy ? '-' + key : key)
                    }}
                  >
                    {value}
                    {key === this.props.sortingBy ? '↓' : ''}
                    {'-' + key === this.props.sortingBy ? '↑' : ''}
                  </td>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.dataTable.map(row => {
              return (
                <DataTableRow row={row} key={row.id} />
              )
            })}
          </tbody>
        </table>
        )
  }
}

SimpleDataTable.propTypes = {
  rows: number,
  getDataFromApi: func,
  sortDataTable: func,
  dataTable: array,
  isLoading: bool,
  sortingBy: string
}

const mapStateToProps = ({ dataTableReducer }) => {
  return {
    dataTable: dataTableReducer.data,
    isLoading: dataTableReducer.isLoading,
    sortingBy: dataTableReducer.sortingBy
  }
}

const mapDispatchToProps = {
  getDataFromApi,
  sortDataTable
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleDataTable)
