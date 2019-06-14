import {USER_REGISTRATION_SUCCESSFUL, USER_REGISTRATION_FAILED} from './actions'

// TODO: Add token after authentication is done
const initialState = {
    user: undefined,
    error: null
}

export const signupReducer = (state=initialState, action) => {
    switch(action.type) {
        case USER_REGISTRATION_SUCCESSFUL:
            const user = action.payload
            return {user}
        case USER_REGISTRATION_FAILED:
            const error = action.payload
            return {error}
        default:
            return state
    }
}