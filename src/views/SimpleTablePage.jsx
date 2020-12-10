import React, { Component } from 'react'
import SimpleDataTable from '../components/SimpleDataTable'
import { number } from 'prop-types'
import SearchBar from '../components/SearchBar'

class SimpleTablePage extends Component {
  render () {
    return (
      <>
        <SearchBar />
        <SimpleDataTable rowsCount={this.props.rowsCount} />
      </>
    )
  }
}

SimpleTablePage.propTypes = {
  rowsCount: number
}

export default SimpleTablePage
