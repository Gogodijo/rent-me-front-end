import axios from 'axios'

const register = async ({email, password, firstName, lastName}) => {
  const body = {
    firstName, lastName, email, password
  }
  try {
    const res = await axios.post('/api/user/register', body)
    console.log(res)
    return {status: true, msg:"registeration complete"}
  }
  catch(error){
    console.log(error.response)
    return {status: false, msg:error.response.data.message}
  }
}

export default register