import { baseApi } from "./axios";

export const carsApi = {

    create: async (data) => {
        const res = await baseApi.post("/cars", data);
        return res.data.result;
    },

    findAll: async () => {
        const res = await baseApi.get("/cars");
        return res.data.result;
    },

    findRecent: async () => {
        const res = await baseApi.get("/cars/recent");
        return res.data.result;
    },

    findAllByEmail: async (email) => {
        const res = await baseApi.get(`/cars/owner/${email}`)
        return res.data.result
    },

    findOne: async (id) => {
        const res = await baseApi.get(`/cars/${id}`)
        return res.data.result
    },

    update: async (id, data) => {
        const res = await baseApi.patch(`/cars/${id}`, data);
        return res.data.result;
    },

    delete: async (id) => {
        const res = await baseApi.delete(`/cars/${id}`)
        return res.data.result
    },

    search: async (brand, sort) => {
        const res = await baseApi.get('/cars/search', {
            params: { brand, sort },
        })
        return res.data.result
    }
};
