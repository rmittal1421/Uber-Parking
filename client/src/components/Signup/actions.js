import axios from 'axios'
import * as CONSTANTS from '../../utils/constants'

export const USER_REGISTRATION_SUCCESSFUL = "USER_REGISTRATION_SUCCESSFUL"
export const USER_REGISTRATION_FAILED = "USER_REGISTRATION_FAILED"

export const registrationSuccessful = (payload) => {
    return {
        type: USER_REGISTRATION_SUCCESSFUL,
        payload
    }
}

export const registrationFailed = (payload) => {
    return {
        type: USER_REGISTRATION_FAILED,
        payload
    }
}

// thunk
export const registerUser = (payload) => {
    return (dispatch) => {
        return axios.post(CONSTANTS.API_ENDPOINTS.SIGN_UP, payload)
            .then(res => dispatch(registrationSuccessful(res.data.user)))
            .catch(error =>{
                console.log(error.response)
                dispatch(registrationFailed(error.response.data.message))    
            })
    }
}