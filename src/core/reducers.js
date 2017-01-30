import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux'
import { authReducer } from './auth'
import { beanReducer } from './beans'
import { roastReducer } from './roasts'

export default combineReducers({
  auth: authReducer,
  routing: routerReducer,
  beans: beanReducer,
  roasts: roastReducer
})
