import React, { Component } from 'react'
import { object } from 'prop-types'
import { tableSortingFields } from '../store/consts'

class DataTableRow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  render () {
    return (
      <>
        <tr key={this.props.row.id} onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
          {Object.entries(tableSortingFields).map(([key, value]) => {
            return (
              <td key={key}>{this.props.row[key]}</td>)
          })}
        </tr>
        {this.state.isOpen && (
          <tr>
            <td colSpan='5'>
              <address>
                <b>City</b>: {this.props.row.address.city} <br />
                <b>State</b>: {this.props.row.address.state} <br />
                <b>Address</b>: {this.props.row.address.streetAddress} <br />
                <b>ZIP</b>: {this.props.row.address.zip} <br />
              </address>
            </td>
          </tr>
        )}
      </>
    )
  }
}

DataTableRow.propTypes = {
  row: object
}

export default DataTableRow
