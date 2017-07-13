const initialState = {
  activeFilterNames: []
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case 'ACTIVATE_SMOKING_FILTER':
      return {
        ...state,
        activeFilterNames: ['smokingOnly']
      }
    default:
      return state
  }
}