import axios from "axios";

const baseUrl = '/api/user/resetpasswordlink'

const resetPassword = async (email) => {
   try {
    const res = await axios.post(baseUrl, {email})
    console.log(res)
    return {status: true, msg:`Viesti lähetetty osoitteeseen ${email}`}
   }
   catch (error) {
     console.log(error)
    return {status:false, msg:error.response.data.message}
   }
}


export default resetPassword