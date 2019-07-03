import axios from 'axios'
import * as CONSTANTS from '../../utils/constants'

export const USER_LOGIN_SUCCESSFUL = "USER_LOGIN_SUCCESSFUL"
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED"

export const loginSuccessful = (payload) => {
    return {
        type: USER_LOGIN_SUCCESSFUL,
        payload
    }
}

export const loginFailed = (payload) => {
    return {
        type: USER_LOGIN_FAILED,
        payload
    }
}

// thunk
export const loginUser = (payload) => {
    return (dispatch) => {
        return axios.post(CONSTANTS.API_ENDPOINTS.LOGIN, payload)
            .then(res => dispatch(loginSuccessful(res.data.user)))
            .catch(error => dispatch(loginFailed(error.response.data.message)))
    }
}