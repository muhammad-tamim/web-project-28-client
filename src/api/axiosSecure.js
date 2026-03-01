// api/axiosSecure.ts
import axios from "axios";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

// Create Axios instance for secure API calls
const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// ===============================
// REQUEST INTERCEPTOR
// ===============================
axiosSecure.interceptors.request.use(
    async (config) => {
        const user = auth.currentUser;

        // Only attach token if user is logged in
        if (user) {
            const token = await user.getIdToken();
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// ===============================
// RESPONSE INTERCEPTOR
// ===============================
axiosSecure.interceptors.response.use(
    (response) => response,
    async (error) => {
        const status = error.response?.status;

        // Handle unauthorized access for protected APIs
        if (status === 401) {
            console.warn("Unauthorized access, redirecting to login...");
            try {
                await signOut(auth);
            } catch (err) {
                console.error("Error during sign out:", err);
            }

            // Delay redirect slightly for better UX
            if (window.location.pathname !== "/sign-in") {
                setTimeout(() => {
                    window.location.replace("/sign-in");
                }, 1000); // 1 second delay
            }
        }

        return Promise.reject(error);
    }
);

export default axiosSecure;