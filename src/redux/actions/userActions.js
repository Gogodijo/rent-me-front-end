import {userConstants} from '../constants/user.constants'
import {loginService} from '../../services/login'


export const userActions = {
  login,
  logout
}

const login = (email, password) => {
  return dispatch => {
    dispatch({type:userConstants.LOGIN_REQUEST, user:email})
    loginService.login(email, password).then( res => {
      if(res.status){
        dispatch({type:userConstants.LOGIN_SUCCESS, user:res.data})
      }
      else {
        dispatch({type:userConstants.LOGIN_FAILURE, msg:res.msg})
      }
    })
  }
}

const logout = () => {
  loginService.logout()
  return { type:userConstants.LOGOUT}
}