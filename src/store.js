import { createStore } from 'redux'

const reducer = (state, action) => {
  console.log(state, action)
  if (action.type === 'HELLO') {
    return {
      x: 15
    }
  }
  return state
}

const store = createStore(reducer, { x: 10 })

store.subscribe(() => console.log(store.getState()))

store.dispatch({
  type: 'HELLO'
})



export default store