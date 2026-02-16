import { baseApi } from "./axios"

export const usersApi = {
    createUser: async (data) => {
        const res = await baseApi.post('/users', data)
        return res.data.result
    }
}