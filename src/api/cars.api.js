import { baseApi } from "./axios";
import axiosSecure from "./axiosSecure";

export const carsApi = {

    create: async (data) => {
        const res = await axiosSecure.post("/cars", data);
        return res.data.result;
    },

    findAll: async (page, limit) => {
        const res = await baseApi.get("/cars", {
            params: { page, limit }
        });
        return res.data;
    },

    findAllByBrand: async (brand, page, limit = 9) => {
        const res = await baseApi.get(`cars/brands/${brand}`, {
            params: { page, limit }
        })
        return res.data
    },

    findAllByCategory: async (category, page, limit = 9) => {
        const res = await baseApi.get(`cars/categories/${category}`, {
            params: { page, limit }
        })
        return res.data
    },

    findAllByEmail: async (email, page, limit = 9) => {
        const res = await axiosSecure.get(`/cars/owner/${email}`, {
            params: { page, limit }
        })
        return res.data
    },

    findRecent: async () => {
        const res = await baseApi.get("/cars/recent");
        return res.data.result;
    },

    countAllCarsCount: async () => {
        const res = await baseApi.get('cars/count')
        return res.data.result
    },

    findOne: async (id) => {
        const res = await baseApi.get(`/cars/${id}`)
        return res.data.result
    },

    update: async (id, data) => {
        const res = await axiosSecure.patch(`/cars/${id}`, data);
        return res.data.result;
    },

    delete: async (id) => {
        const res = await axiosSecure.delete(`/cars/${id}`)
        return res.data.result
    },

    search: async (brand, category, sort, page, limit = 9) => {
        const res = await baseApi.get('/cars/search', {
            params: { brand, category, sort, page, limit },
        })
        return res.data
    }
};
