const ACTIVATE_SMOKING_FILTER = 'studentFilters/ACTIVATE_SMOKING_FILTER'

export const activateSmokingFilter = filterName => ({
  type: ACTIVATE_SMOKING_FILTER,
  filterName
})

const initialState = {
  activeFilterNames: []
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case ACTIVATE_SMOKING_FILTER:
      return {
        ...state,
        activeFilterNames: state.activeFilterNames.concat(
          action.filterName
        )
      }
    default:
      return state
  }
}