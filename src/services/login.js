import axios from 'axios'

const baseUrl = '/api/user/login'
const baseUrlGoogle= '/api/user/loginGoogle'

const login = async (email, password) => {
  try {
     const req = await axios.post(baseUrl, {
       email,
       password
     })
     localStorage.setItem('user', JSON.stringify(req.data))
     return {status:true, data: req.data}
  } catch (error) {
    return {status:false, msg:error.response.data.message}
  }
}

const loginGoogle = async (token) => {
  try {
    const req = await axios.post(baseUrlGoogle, {token})
    localStorage.setItem('user', JSON.stringify(req.data))
    return {status:true, data: req.data}
  }
  catch(err) {
    return {status: false, msg: err.response.data.message}
  }
}

const logout = () => {
  localStorage.removeItem('user')
}

export const loginService = {
  login,
  logout,
  loginGoogle
}
