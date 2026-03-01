import axios, {
    type AxiosError,
    type AxiosInstance,
    type InternalAxiosRequestConfig,
} from "axios";

export const $host: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

export const $authHost: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

// ====================
// Attach access token
// ====================
const authInterceptor = (
    config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
    const token = localStorage.getItem("accessToken");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
};

$authHost.interceptors.request.use(authInterceptor);

// ====================
// Refresh logic
// ====================
let isRefreshing = false;
let queue: ((token: string) => void)[] = [];

$authHost.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config;

        if (!originalRequest) {
            return Promise.reject(error);
        }

        const status = error.response?.status;

        // Only handle 401
        if (status !== 401) {
            return Promise.reject(error);
        }

        // Prevent infinite loop
        if (originalRequest.url?.includes("/auth/refresh")) {
            localStorage.removeItem("accessToken");
            return Promise.reject(error);
        }

        // If refresh already running → wait
        if (isRefreshing) {
            return new Promise((resolve) => {
                queue.push((newToken: string) => {
                    originalRequest.headers.Authorization = `Bearer ${newToken}`;
                    resolve($authHost(originalRequest));
                });
            });
        }

        isRefreshing = true;

        try {
            const response = await $host.post("/auth/refresh");
            const newToken = response.data;

            localStorage.setItem("accessToken", newToken);

            // Retry queued requests
            queue.forEach((cb) => cb(newToken));
            queue = [];

            // Retry original request
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return $authHost(originalRequest);
        } catch (refreshError) {
            localStorage.removeItem("accessToken");
            return Promise.reject(refreshError);
        } finally {
            isRefreshing = false;
        }
    }
);