import {combineReducers} from 'redux'
import {signupReducer} from './Signup/reducer' 

export const componentsReducer = combineReducers({
    signupInfo: signupReducer
})