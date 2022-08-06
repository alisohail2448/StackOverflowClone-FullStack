import { combineReducers } from 'redux'
import authReducer from './auth.js'
import currentUserReducer from './currentUserReducer.js'
import questionReducer from './questionReducer.js'
import userReducer from './userReducer.js'


export default combineReducers({
    authReducer, currentUserReducer, questionReducer, userReducer
})