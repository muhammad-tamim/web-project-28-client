import { baseApi } from "./axios";
import axiosSecure from "./axiosSecure";

export const brandsApi = {
    getAll: async () => {
        const res = await baseApi.get("/brands");
        return res.data.result;
    },

    create: async (data) => {
        const res = await axiosSecure.post("/brands", data);
        return res.data.result;
    },

    update: async (id, data) => {
        const res = await axiosSecure.patch(`/brands/${id}`, data);
        return res.data.result;
    },

    delete: async (id) => {
        const res = await axiosSecure.delete(`/brands/${id}`)
        return res.data.result
    },

    countAll: async () => {
        const res = await axiosSecure.get("/brands/count")
        return res.data.result
    }
};
