
import { applyMiddleware, createStore } from 'redux'
import { allReducers } from './configureStore'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const store = createStore(allReducers, applyMiddleware(thunk, logger))
