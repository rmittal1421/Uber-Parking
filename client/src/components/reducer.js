import {combineReducers} from 'redux'
import {signupReducer} from './Signup/reducer'
import {getLocationReducer} from './Home/reducer'
import {loginReducer} from './Login/reducer'

export const componentsReducer = combineReducers({
    signupInfo: signupReducer,
    loginInfo: loginReducer,
    currLocation: getLocationReducer
})