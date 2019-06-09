import axios from 'axios'

export const USER_REGISTRATION_SUCCESSFUL = "USER_REGISTRATION_SUCCESSFUL"
export const USER_REGISTRATION_FAILED = "USER_REGISTRATION_FAILED"

export const registrationSuccessful = (payload) => {
    return {
        type: USER_REGISTRATION_SUCCESSFUL,
        payload
    }
}

export const registrationFailed = (paylaod) => {
    return {
        type: USER_REGISTRATION_FAILED,
        payload
    }
}

// thunk
export const registerUser = (payload) => {
    return (dispatch) => {
        return axios.get('http://localhost:3000/signup')
            .then(user => dispatch(registrationSuccssful(user)))
            .catch(error => dispatch(registrationFailed(err)))
    }


    // return async (dispatch) => {
    //     try {
    //         const user = await axios.get('http://localhost:3000/signup')
    //         dispatch(registrationSuccssful(user))
    //     }
    //     catch(err) {
    //         dispatch(registrationFailed(err))
    //     }
    // }
}