import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class HomePage extends Component {
  render () {
    return (
      <section className='section home'>
        <div className='container'>
          <h1 className='section__title'> Выберите объем данных </h1>
          <div className='home__nav-wrap'>
            <NavLink to='/small_table'>
              <button className='home__nav-button'> Маленький объем данных</button>
            </NavLink>
            <NavLink to='/big_table'>
              <button className='home__nav-button'> Большой объем данных</button>
            </NavLink>
          </div>
        </div>
      </section>
    )
  }
}

export default HomePage
