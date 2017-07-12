const ADD = 'favoriteStudents/ADD'
const REMOVE = 'favoriteStudents/REMOVE'
const TOGGLE = 'favoriteStudents/TOGGLE'

export const add = studentId => ({
  type: ADD,
  studentId
})

export const remove = studentId => ({
  type: REMOVE,
  studentId
})

export const toggle = studentId => ({
  type: TOGGLE,
  studentId
})

const initialState = {
  favoriteStudentIds: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        favoriteStudentIds: state.favoriteStudentIds.filter(
          studentId => action.studentId !== studentId
        ).concat(action.studentId)
      }
    case REMOVE:
      return {
        ...state,
        favoriteStudentIds: state.favoriteStudentIds.filter(
          studentId => action.studentId !== studentId
        )
      }
    case TOGGLE:
      return {
        ...state,
        favoriteStudentIds: state.favoriteStudentIds.includes(action.studentId) ?
          state.favoriteStudentIds.filter(
            studentId => action.studentId !== studentId
          ) :
          state.favoriteStudentIds.concat(action.studentId)
      }
    default:
      return state
  }
}