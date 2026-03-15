import axios from "axios"
import { auth } from "../firebase/firebase.init"

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

axiosSecure.interceptors.request.use(
    async (config) => {
        const user = auth.currentUser

        if (user) {
            const token = await user.getIdToken()
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error) => Promise.reject(error)
)

axiosSecure.interceptors.response.use(
    (res) => res,
    (error) => {
        if (error.response?.status === 401) {
            console.warn("Token expired or unauthorized")
        }

        return Promise.reject(error)
    }
)

export default axiosSecure