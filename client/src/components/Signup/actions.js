export const USER_REGISTRATION = "USER_REGISTRATION"

export const registerUser = (payload) => {
    // We have the payload and we need to make an API request to the backend to register the user 
    return {
        type: USER_REGISTRATION,
        payload
    }
}