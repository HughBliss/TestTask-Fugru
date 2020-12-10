
import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { dataTableReducer } from './reducers/dataTableReducer'

const reducers = combineReducers({
  dataTableReducer
})

export const store = createStore(reducers, applyMiddleware(thunk, logger))
