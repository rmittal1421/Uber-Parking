import {USER_REGISTRATION} from './actions'

const initialState = {
    user: undefined,
    token: undefined
}

export const signupReducer = (state=initialState, action) => {
    switch(action.type) {
        case USER_REGISTRATION:
            const {user, token} = action.payload
            return {user, token}
        default:
            return state
    }
}