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

    getCountAll: async () => {
        const res = await baseApi.get('/users/count')
        return res.data.result
    },

    getCountAllCustomer: async () => {
        const res = await baseApi.get('/users/count/customer')
        return res.data.result
    },

    getCountAllSeller: async () => {
        const res = await baseApi.get('/users/count/seller')
        return res.data.result
    },

    getCountAllAdmin: async () => {
        const res = await baseApi.get('/users/count/admin')
        return res.data.result
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