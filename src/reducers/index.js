import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import fetchData from './fetchData'
import switchTable from './switchTable'

export default combineReducers({
  routing:routerReducer,
  data:fetchData,
  switchTable
})