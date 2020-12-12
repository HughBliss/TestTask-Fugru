import React, { Component } from 'react'
import { bool } from 'prop-types'
import { connect } from 'react-redux'

class Preloader extends Component {
  render () {
    return this.props.isLoading && (
      <div className='preloader'>
        <div className='preloader__dots' />
      </div>
    )
  }
}

Preloader.propTypes = {
  isLoading: bool
}

const mapStateToProps = ({ dataTableReducer }) => {
  return {
    isLoading: dataTableReducer.isLoading
  }
}

export default connect(mapStateToProps)(Preloader)
