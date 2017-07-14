const TOGGLE_FILTER = 'studentFilters/TOGGLE_FILTER'

export const activateFilter = filterName => ({
  type: TOGGLE_FILTER,
  filterName
})

const initialState = {
  activeFilterNames: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        activeFilterNames: state.activeFilterNames.includes(action.filterName) ?
          state.activeFilterNames.filter(
            filterName => filterName !== action.filterName
          ) :
          state.activeFilterNames.filter(
            activeFilterName => {
              const prefix = action.filterName.split('_')[0]

              return !activeFilterName.includes(prefix)
            }
          ).concat(
            action.filterName
          )
      }
    default:
      return state
  }
}