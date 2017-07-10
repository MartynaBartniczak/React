import { createStore } from 'redux'

import counter from './state/counter'

const store = createStore(counter)

export default store