import { baseApi } from "./axios";
import axiosSecure from "./axiosSecure";

export const bookingsApi = {

    create: async (tran_id) => {
        const res = await axiosSecure.post(`/bookings`, { tran_id });
        return res.data.result;
    },

    findAll: async (email) => {
        const res = await axiosSecure.get(`/bookings/${email}`);
        return res.data.result;
    },

    findAllBookings: async () => {
        const res = await axiosSecure.get('/bookings')
        return res.data.result
    },

    findAllBookingsWithPagination: async (page, limit = 9) => {
        const res = await axiosSecure.get('/bookings/pagination', {
            params: { page, limit }
        })
        return res.data
    },

    countAll: async () => {
        const res = await axiosSecure.get("/bookings/count")
        return res.data.result
    },

    findAllBySellerEmail: async (email) => {
        const res = await axiosSecure.get(`/bookings/seller/${email}`);
        return res.data.result
    },

    getReport: async () => {
        const res = await axiosSecure.get('/bookings/report', { responseType: 'blob' })
        return res.data
    },

    findAllBySellerEmailWithPagination: async (email, page, limit = 9) => {
        const res = await axiosSecure.get(`/bookings/seller/pagination/${email}`, {
            params: { page, limit }
        });
        return res.data
    },

    update: async (id, data) => {
        const res = await axiosSecure.patch(`/bookings/${id}`, data);
        return res.data.result;
    },

    delete: async (id) => {
        const res = await axiosSecure.delete(`/bookings/${id}`);
        return res.data.result;
    },
};