// sslcommerz.api.js
import { baseApi } from "./axios";

export const sslcommerzApi = {
    init: async (data) => {
        const res = await baseApi.post("/sslcommerz/init", data);
        return res.data.gatewayURL;
    },

    validate: async (tran_id, val_id) => {
        const res = await baseApi.post("/sslcommerz/validate", { tran_id, val_id });
        return res.data.success;
    },
};
