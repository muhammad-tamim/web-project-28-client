import { baseApi } from "./axios";
import axiosSecure from "./axiosSecure";

export const categoriesApi = {
    getAll: async () => {
        const res = await baseApi.get("/categories");
        return res.data.result;
    },

    create: async (data) => {
        const res = await axiosSecure.post("/categories", data);
        return res.data.result;
    },

    update: async (id, data) => {
        const res = await axiosSecure.patch(`/categories/${id}`, data);
        return res.data.result;
    },

    delete: async (id) => {
        const res = await axiosSecure.delete(`/categories/${id}`)
        return res.data.result
    },

    countAll: async () => {
        const res = await axiosSecure.get('/categories/count')
        return res.data.result
    }
};