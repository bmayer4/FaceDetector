
const imageReducer = (state = { b: '', boxes: []}, action) => {
    switch (action.type) {
        case 'IMAGE':
            return { ...state, b: action.payload  }
        case 'BOX':
            return {...state, boxes: action.payload  }
        default:
            return state
    }
}

export default imageReducer;