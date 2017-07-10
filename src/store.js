import { createStore, combineReducers } from 'redux'

import counter from './state/counter'

const reducer = combineReducers({
  counter
})

const store = createStore(reducer)

export default store