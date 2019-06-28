import {USER_LOGIN_SUCCESSFUL, USER_LOGIN_FAILED} from './actions'

// TODO: Add token after authentication is done
const initialState = {
    user: undefined,
    error: null
}

export const loginReducer = (state=initialState, action) => {
    switch(action.type) {
        case USER_LOGIN_SUCCESSFUL:
            const user = action.payload
            return {user}
        case USER_LOGIN_FAILED:
            const error = action.payload
            return {error}
        default:
            return state
    }
}