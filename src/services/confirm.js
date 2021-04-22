import axios from 'axios'
const baseUrl='/api/user/confirmation/'
const confirm = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}${id}`)
    console.log(res)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export default confirm
