const ADD = 'favoriteStudents/ADD'
const REMOVE = 'favoriteStudents/REMOVE'

export const add = studentId => ({
  type: ADD,
  studentId
})

export const remove = studentId => ({
  type: REMOVE,
  studentId
})

const initialState = {
  favoriteStudentIds: []
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case ADD:
      return {
        ...state,
        favoriteStudentIds: state.favoriteStudentIds.concat(action.studentId)
      }
    case REMOVE:
      return {
        ...state,
        favoriteStudentIds: state.favoriteStudentIds.filter(
          studentId => action.studentId !== studentId
        )
      }
    default:
      return state
  }
}