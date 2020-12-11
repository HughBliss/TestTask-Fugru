import React, { Component } from 'react'
import SimpleDataTable from '../components/SimpleDataTable'
import { number } from 'prop-types'
import SearchBar from '../components/SearchBar'
import Paginator from '../components/Paginator'

class SimpleTablePage extends Component {
  render () {
    return (
      <>
        <SearchBar />
        <SimpleDataTable rowsCount={this.props.rowsCount} />
        <Paginator />
      </>
    )
  }
}

SimpleTablePage.propTypes = {
  rowsCount: number
}

export default SimpleTablePage
