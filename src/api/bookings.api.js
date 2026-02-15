import { baseApi } from "./axios";

export const bookingsApi = {
    findAll: async (email) => {
        const res = await baseApi.get(`/bookings/${email}`);
        return res.data.result;
    },

    update: async (id, data) => {
        const res = await baseApi.patch(`/bookings/${id}`, data);
        return res.data.result;
    },

    delete: async (id) => {
        const res = await baseApi.delete(`/bookings/${id}`);
        return res.data.result;
    },
};