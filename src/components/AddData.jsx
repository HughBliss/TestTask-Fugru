import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewUser } from '../store/actions/addNewUser'

class AddData extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: true
    }
  }

  render () {
    return (
      <>
        <button
          className='btn btn--rounded'
          onClick={() => this.setState({ showModal: !this.state.showModal })}
        >+
        </button>
        {this.state.showModal &&
          <div className='modal'>
            <div
              className='modal__bg'
              onClick={() => this.setState({ showModal: !this.state.showModal })}
            />
            <div className='modal__wrap'>
              <h3 className='modal__title'>Добавте новго пользователя</h3>
              <form className='modal__form form'>
                <button className='btn' type='submit'>Добавить</button>
              </form>
            </div>
          </div>}
      </>
    )
  }
}

const mapDispatchToProps = {
  addNewUser
}

export default connect(() => {
}, mapDispatchToProps)(AddData)
