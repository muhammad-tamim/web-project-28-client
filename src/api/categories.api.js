import { baseApi } from "./axios";

export const categoriesApi = {
    getAll: async () => {
        const res = await baseApi.get("/categories");
        return res.data.result;
    },

    create: async (data) => {
        const res = await baseApi.post("/categories", data);
        return res.data;
    },

    update: async (id, data) => {
        const res = await baseApi.patch(`/categories/${id}`, data);
        return res.data;
    },
};