
const authReducer = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN_AUTH':
            return action.payload || false;
        case 'LOGOUT_AUTH':
            return null
        case 'LOGIN_ERROR':
            return { loginError: action.payload }
        case 'REGISTER_ERROR':
            return { registerError: action.payload }
        case 'INCREMENT_ENTRY':
            return { ...state, entries: action.payload.entries }
        default:
            return state
    }
}

export default authReducer;