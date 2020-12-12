import React, { Component } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { filterDatableByPhrase } from '../store/actions/filterDatableByPhrase'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchPhrase: ''
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSetSearchPhrase = this.handleSetSearchPhrase.bind(this)
  }

  handleSearch (e) {
    e.preventDefault()
    this.props.filterDatableByPhrase(this.state.searchPhrase)
  }

  handleSetSearchPhrase (e) {
    this.setState({ searchPhrase: e.target.value })
  }

  render () {
    return (
      <form className='search-bar' onSubmit={this.handleSearch}>
        <input
          type='text'
          className='search-bar__input'
          value={this.state.searchPhrase}
          onChange={this.handleSetSearchPhrase}
        />
        <button className='search-bar__btn' type='submit'>search</button>
      </form>
    )
  }
}

SearchBar.propTypes = {
  filterDatableByPhrase: func
}

const mapDispatchToProps = {
  filterDatableByPhrase
}

export default connect(() => {
}, mapDispatchToProps)(SearchBar)
