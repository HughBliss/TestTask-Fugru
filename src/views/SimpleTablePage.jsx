import React, { Component } from 'react'
import SimpleDataTable from '../components/SimpleDataTable'
import { number } from 'prop-types'
import SearchBar from '../components/SearchBar'
import Paginator from '../components/Paginator'
import AddData from '../components/AddData'

class SimpleTablePage extends Component {
  render () {
    return (
      <>
        <section className='section'>
          <div className='container'>
            <div className='tool-bar'>
              <SearchBar />
              <AddData />
            </div>
            <SimpleDataTable rowsCount={this.props.rowsCount} />
            <Paginator />
          </div>
        </section>
      </>
    )
  }
}

SimpleTablePage.propTypes = {
  rowsCount: number
}

export default SimpleTablePage
