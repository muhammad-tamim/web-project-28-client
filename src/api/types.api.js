import { baseApi } from "./axios";

export const typesApi = {
    getAll: async () => {
        const res = await baseApi.get("/types");
        return res.data.result;
    },

    create: async (data) => {
        const res = await baseApi.post("/types", data);
        return res.data;
    },

    update: async (id, data) => {
        const res = await baseApi.patch(`/types/${id}`, data);
        return res.data;
    },
};