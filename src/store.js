import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import counter from './state/counter'
import students from './state/students'
import studentSearcher from './state/studentSearcher'
import favoriteStudents from './state/favoriteStudents'
import groups from './state/groups'

const reducer = combineReducers({
  counter,
  students,
  studentSearcher,
  favoriteStudents,
  groups
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(
    thunk
  )
))

export default store