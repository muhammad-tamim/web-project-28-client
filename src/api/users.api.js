import { baseApi } from "./axios"

export const usersApi = {
    createUser: async (data) => {
        const res = await baseApi.post('/users', data)
        return res.data.result
    },

    getUsers: async (page, limit) => {
        const res = await baseApi.get('/users', {
            params: { page, limit }
        })
        return res.data
    },

    getUser: async (email) => {
        const res = await baseApi.get(`/users/${email}`)
        return res.data.result
    },

    updateUser: async (id, data) => {
        const res = await baseApi.patch(`/users/update/${id}`, data)
        return res.data.result
    }

}