import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import SimpleTablePage from './views/SimpleTablePage'
import HomePage from './views/HomePage'
import Preloader from './components/Preloader'

export class App extends Component {
  render () {
    return (
      <>
        <Router>
          <Switch>
            <Route path='/small_table'>
              <SimpleTablePage rowsCount={1000} />
            </Route>
            <Route path='/big_table'>
              <h1>Большая таблица</h1>
            </Route>
            <Route path='/'>
              <HomePage />
            </Route>
          </Switch>
        </Router>
        <Preloader />
      </>
    )
  }
}
