const notificationReducer = (state, action) => {
    switch (action.type) {
      case 'SET_NOTIFICATION':
          const id = action.data.id
          const anecdote = state.find(a => a.id === id)
        return `you voted ${anecdote}`
      default:
        return state
    }
  }
  
  export const notificationChange = (notification) => {
    return {
      type: 'SET_NOTIFICATION',
      notification,
    }
  }

export default notificationReducer