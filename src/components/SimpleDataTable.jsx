import { connect } from 'react-redux'
import React, { Component } from 'react'
import { number, func, array, bool } from 'prop-types'
import { getDataFromApi } from '../store/actions/getDataFromApi'

class SimpleDataTable extends Component {
  componentDidMount () {
    this.props.getDataFromApi(this.props.rows)
  }

  render () {
    return this.props.isLoading
      ? (
        <p>Загрузка...</p>
        )
      : (
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>First name</td>
              <td>Last name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
          </thead>
          <tbody>
            {this.props.dataTable.map(row => {
              return (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.firstName}</td>
                  <td>{row.lastName}</td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                </tr>
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
  dataTable: array,
  isLoading: bool
}

const mapStateToProps = ({ dataTableReducer }) => {
  return {
    dataTable: dataTableReducer.data,
    isLoading: dataTableReducer.isLoading
  }
}

const mapDispatchToProps = {
  getDataFromApi
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleDataTable)
