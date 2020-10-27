const notificationReducer = (state='', action) => {
    switch (action.type) {
      case 'SET_NOTIFICATION':
        return action.data
      default:
        return state
    }
  }
  
  export const notificationChange = (notification) => {
    return async dispatch => {
      dispatch({
        type: 'SET_NOTIFICATION',
        data: notification
      })
      setTimeout(() => {
        dispatch(notificationChange(''))
      }, 5000)
    }
      
  }
  

export default notificationReducer