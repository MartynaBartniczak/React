import { createStore, combineReducers } from 'redux'

import counter from './state/counter'

const reducer = combineReducers({
  counter
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store