import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import counter from './state/counter'

const reducer = combineReducers({
  counter
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(
    thunk
  )
))

export default store