// api/axiosSecure.ts
import axios from "axios";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// Helper to wait for Firebase user to initialize
const waitForUser = () =>
    new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            unsubscribe();
            resolve(user);
        });
    });

// ===============================
// REQUEST INTERCEPTOR
// ===============================
axiosSecure.interceptors.request.use(
    async (config) => {
        // Wait for Firebase to restore the currentUser
        await waitForUser();

        const user = auth.currentUser;
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
        if (error.response?.status === 401) {
            try {
                await signOut(auth);
            } catch (err) {
                console.error("Error during sign out:", err);
            }

            if (window.location.pathname !== "/sign-in") {
                window.location.replace("/sign-in");
            }
        }

        return Promise.reject(error);
    }
);

export default axiosSecure;