
const authReducer = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN_AUTH':
            return action.payload || false;
        case 'LOGOUT_AUTH':
            return null
        default:
            return state
    }
}

export default authReducer;