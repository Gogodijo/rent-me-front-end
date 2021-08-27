import {combineReducers} from 'redux'
import { userReducer } from './user.reducer'
import { authentication } from './authentication.reducer'

const rootReducer = combineReducers({
  userReducer,
  authentication
})

export default rootReducer
