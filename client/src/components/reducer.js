import {combineReducers} from 'redux'
import {signupReducer} from './Signup/reducer'
import {getLocationReducer} from './Home/reducer'

export const componentsReducer = combineReducers({
    signupInfo: signupReducer,
    currLocation: getLocationReducer
})