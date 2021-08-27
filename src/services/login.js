import axios from 'axios'

const baseUrl = '/api/user/login'

const login = async ({email, password}) => {
  try {
     const req = await axios.post(baseUrl, {
       email,
       password
     })
     return {status:true, data: req.data}
  } catch (error) {
    return {status:false, msg:error.response.data.message}
  }
}

const logout = () => {
  localStorage.removeItem('user')
}

export const loginService = {
  login,
  logout
}
