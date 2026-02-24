import { baseApi } from "./axios"
import axiosSecure from "./axiosSecure"

export const usersApi = {
    createUser: async (data) => {
        const res = await baseApi.post('/users', data)
        return res.data.result
    },

    getUsers: async (page, limit) => {
        const res = await axiosSecure.get('/users', {
            params: { page, limit }
        })
        return res.data
    },

    getRecentSellers: async () => {
        const res = await axiosSecure.get('/users/recent-sellers')
        return res.data.result
    },

    getRecentCustomers: async () => {
        const res = await axiosSecure.get('/users/recent-customers')
        return res.data.result
    },

    getCountAll: async () => {
        const res = await axiosSecure.get('/users/count')
        return res.data.result
    },

    getCountAllCustomer: async () => {
        const res = await axiosSecure.get('/users/count/customer')
        return res.data.result
    },

    getCountAllSeller: async () => {
        const res = await axiosSecure.get('/users/count/seller')
        return res.data.result
    },

    getCountAllAdmin: async () => {
        const res = await axiosSecure.get('/users/count/admin')
        return res.data.result
    },

    getUser: async (email) => {
        const res = await axiosSecure.get(`/users/${email}`)
        return res.data.result
    },

    updateUser: async (id, data) => {
        const res = await axiosSecure.patch(`/users/update/${id}`, data)
        return res.data.result
    }

}