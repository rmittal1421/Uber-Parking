import {combineReducers} from 'redux'
import {componentsReducer} from '../../components/reducer'

export const rootReducer = combineReducers({
    componentsState: componentsReducer
})
