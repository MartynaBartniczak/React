import makeFetchDuck from './_utils/makeFetchDuck'

const result = makeFetchDuck(
  'students',
  process.env.PUBLIC_URL + '/data/students.json'
)

export const fetchStudents = result.fetchData
export default result.reducer