import { baseApi } from "./axios";

export const stripeApi = {
    createSession: async (data) => {
        const res = await baseApi.post("/stripe/init", data);
        return res.data; // { gatewayURL, tran_id, val_id }
    },

    verifyPayment: async (tran_id, val_id) => {
        const res = await baseApi.post("/stripe/validate", { tran_id, val_id });
        return res.data; // { success: true/false }
    }
};
