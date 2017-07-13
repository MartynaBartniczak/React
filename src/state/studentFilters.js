const ACTIVATE_SMOKING_FILTER = 'studentFilters/ACTIVATE_SMOKING_FILTER'

export const activateSmokingFilter = () => ({
  type: ACTIVATE_SMOKING_FILTER
})

const initialState = {
  activeFilterNames: []
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case ACTIVATE_SMOKING_FILTER:
      return {
        ...state,
        activeFilterNames: ['smokingOnly']
      }
    default:
      return state
  }
}