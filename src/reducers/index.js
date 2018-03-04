import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import fetchData from './fetchData'
import pushDislikes from './pushDislikes'
import pushLikes from './pushLikes'

export default combineReducers({
  routing:routerReducer,
  data:fetchData,
  likes: pushLikes,
  dislikes: pushDislikes
})