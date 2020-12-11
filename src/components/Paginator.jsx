import React, { Component } from 'react'
import { connect } from 'react-redux'
import { func, number } from 'prop-types'
import { paginatorMoveToPage } from '../store/actions/paginatorMoveToPage'

class Paginator extends Component {
  render () {
    return (
      <div className='paginator'>
        <button
          className='paginator__btn paginator__btn--prev'
          onClick={() => this.props.paginatorMoveToPage(this.props.currentPage - 1)}
        >prev
        </button>
        <ul className='paginator__list'>
          {[...Array(this.props.pageCount)].map((_, page) =>
            <li key={page} className='paginator__page paginator__page--active'>
              <button onClick={() => this.props.paginatorMoveToPage(page)}>
                {page + 1}
              </button>
            </li>
          )}
        </ul>
        <button
          className='paginator__btn paginator__btn--next'
          onClick={() => this.props.paginatorMoveToPage(this.props.currentPage + 1)}
        >next
        </button>
      </div>
    )
  }
}

Paginator.propTypes = {
  paginatorMoveToPage: func,
  currentPage: number,
  pageCount: number
}

const mapStateToProps = ({ dataTableReducer }) => {
  return {
    currentPage: dataTableReducer.currentPage,
    pageCount: dataTableReducer.pageCount
  }
}

const mapDispatchToProps = {
  paginatorMoveToPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginator)
