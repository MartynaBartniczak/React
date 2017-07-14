import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'

import counter from './state/counter'
import students from './state/students'
import studentSearcher from './state/studentSearcher'
import studentFilters from './state/studentFilters'
import favoriteStudents from './state/favoriteStudents'
import groups from './state/groups'

const reducer = combineReducers({
  counter,
  students,
  studentSearcher,
  studentFilters,
  favoriteStudents,
  groups
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(
    thunk
  ),
  persistState(['favoriteStudents', 'students'], { key: 'our-app-name'}),
))

export default store