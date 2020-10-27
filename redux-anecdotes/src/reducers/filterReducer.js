const filterReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FILTER_VALUE':
            return action.data
        default:
            return ''    
    }
}

export const changeFilter = (filter) => {
    return ({
        type: 'SET_FILTER_VALUE',
        data: filter
      })
}

export default filterReducer