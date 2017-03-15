import { combineReducers } from 'redux'
import user from './user'
import feeds from './feeds'


export default combineReducers({ user, feeds })
