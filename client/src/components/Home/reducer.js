import {UPDATE_SELECTED_LOCATION_SUCCESSFUL, UPDATE_SELECTED_LOCATION_FAILED} from './actions'

// TODO: Add token after authentication is done
const initialState = {
    location: undefined,
    error: null
}

export const getLocationReducer = (state=initialState, action) => {
    switch(action.type) {
        case UPDATE_SELECTED_LOCATION_SUCCESSFUL:
            const location = action.payload
            return {location}
        case UPDATE_SELECTED_LOCATION_FAILED:
            const error = action.payload
            return {error}
        default:
            return state
    }
}