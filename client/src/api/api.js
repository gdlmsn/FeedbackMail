import axios from "axios"

const iexInstance = axios.create({
    baseURL:process.env.REACT_APP_API_URL
})

iexInstance.interceptors.request.use(
    
)

export default iexInstance;