import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import fetchData from './fetchData'

export default combineReducers({
  routing:routerReducer,
  data:fetchData
})