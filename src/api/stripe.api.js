import { baseApi } from "./axios";

export const stripeApi = {
    createSession: async (data) => {
        const res = await baseApi.post("/stripe/create-session", data);
        return res.data.url;
    },

    verifyPayment: async (sessionId) => {
        const res = await baseApi.get(`/stripe/verify/${sessionId}`);
        return res.data;
    }
};
