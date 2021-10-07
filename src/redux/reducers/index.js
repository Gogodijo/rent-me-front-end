import {combineReducers} from 'redux'
import { users } from './user.reducer'
import { authentication } from './authentication.reducer'

const rootReducer = combineReducers({
  users,
  authentication
})

export default rootReducer
