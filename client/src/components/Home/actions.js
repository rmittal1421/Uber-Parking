import axios from "axios";
import {getLocation} from '../../utils/geoLocation'

export const UPDATE_SELECTED_LOCATION_SUCCESSFUL = 'UPDATE_SELECTED_LOCATION_SUCCESSFUL'
export const UPDATE_SELECTED_LOCATION_FAILED = 'UPDATE_SELECTED_LOCATION_FAILED'


// Action if appropriate longitude/latitude is found
export const updateSelectedLocationSuccessful = (payload) => {
    return {
        type: UPDATE_SELECTED_LOCATION_SUCCESSFUL,
        payload
    }
}

// Action if appropriate longitude/latitude is not found
export const updateSelectedLocationFailed = (payload) => {
    return {
        type: UPDATE_SELECTED_LOCATION_FAILED,
        payload
    }
}



// thunk (make API request here)
export const updateLocationAction = (payload) => {
    return (dispatch) => {
        return getLocation(payload)
            .then(data => dispatch(updateSelectedLocationSuccessful(data)))
            .catch(error => dispatch(updateSelectedLocationFailed(error.message)))
    }
}