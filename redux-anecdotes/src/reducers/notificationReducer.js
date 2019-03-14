let currentTimeout = null
export const setNotification = (message, seconds) => {
  return async dispatch => {
    dispatch({
      type: 'NEW_NOTIFICATION',
      data: message
    })
    currentTimeout = setTimeout(() => {
      dispatch({
        type: 'CLEAR_NOTIFICATION'
      })
    }, seconds * 1000)
  }
}

const reducer = (state = '', action) => {
  switch (action.type) {
    case 'NEW_NOTIFICATION':
      return action.data
    case 'CLEAR_NOTIFICATION':
      return ''
    default: return state
  }
  return state
}

export default reducer