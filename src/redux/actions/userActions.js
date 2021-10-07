import {userConstants} from '../constants/user.constants'
import {loginService} from '../../services/login'


const login = (email, password) => {

  return dispatch => {
    dispatch(request({ email}))
    loginService.login(email, password).then( res => {
      if(res.status){
        dispatch(success(res.data))
      }
      else {
        dispatch(failure(res.msg))
      }
    })
  }

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

const loginGoogle = (data) => {
  return dispatch => {
   dispatch(request(data.profileObj.email))
   loginService.loginGoogle(data.tokenId).then( res => {
     if(res.status){
       dispatch(success(res.data))
     }
     else {
       dispatch(failure(res.msg))
     }
   })
  }

  function request(user) {return {type: userConstants.LOGIN_REQUEST, user}}
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

const logout = () => {
  loginService.logout()
  return { type:userConstants.LOGOUT}
}

const reset = () => {
  return {type:userConstants.RESET_LOGIN}
}

export const userActions = {
  login,
  logout,
  reset,
  loginGoogle
}
