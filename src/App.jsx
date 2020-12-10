import React, { Component } from 'react'
import SimpleDataTable from './components/SimpleDataTable'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'

export class App extends Component {
  render () {
    return (
      <div className='App'>
        <Router>
          <NavLink to='/small_table'>
            <button> Маленький объем данных</button>
          </NavLink>
          <NavLink to='/big_table'>
            <button>Большой объем данных</button>
          </NavLink>
          <Switch>
            <Route path='/small_table'>
              <SimpleDataTable rows={32} />
            </Route>
            <Route path='/big_table'>
              <h1>Большая таблица</h1>
            </Route>
            <Route path='/'>
              <h1>Выберите объем данных</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
