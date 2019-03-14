export const newFilter = (filter) => (
  {
    data: filter,
    type: 'NEW_FILTER'
  }
)

const reducer = (state = '', action) => {
  switch (action.type) {
    case 'NEW_FILTER':
      return action.data
    default: return state
  }
  return state
}

export default reducer