import { baseApi } from "./axios";

export const brandsApi = {
    getAll: async () => {
        const res = await baseApi.get("/brands");
        return res.data.result;
    },

    create: async (data) => {
        const res = await baseApi.post("/brands", data);
        return res.data.result;
    },

    update: async (id, data) => {
        const res = await baseApi.patch(`/brands/${id}`, data);
        return res.data.result;
    },

    delete: async (id) => {
        const res = await baseApi.delete(`/brands/${id}`)
        return res.data.result
    },

    countAll: async () => {
        const res = await baseApi.get("/brands/count")
        return res.data.result
    }
};
