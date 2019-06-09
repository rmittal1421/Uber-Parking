import axios from 'axios'

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
        return axios.post('http://localhost:3000/signup', payload)
            .then(user => dispatch(registrationSuccessful(user)))
            .catch(error => dispatch(registrationFailed(error)))
    }
}