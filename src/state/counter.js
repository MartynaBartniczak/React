// initial state
const initialState = {
  value: 0
}

// reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        value: state.value + 1
      }
    case 'DECREMENT':
      return {
        value: state.value - 1
      }
    case 'RESET':
      return initialState
    default:
      return state
  }
}