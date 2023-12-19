import axios from "axios";

const baseUrl = "http://localhost:5000/api"
const app = axios.create({
    baseURL: baseUrl,
    withCredentials: true
})

app.interceptors.request.use(
    res => res, error => Promise.reject(error))

app.interceptors.response.use(
    (res) => res,
    async (err) => {
        const originalConfig = err.config;
        if (err.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            try {
                const { data } = await axios.get(`${baseUrl}/user/refresh-token`, {
                    withCredentials: true,
                });
                if (data) return app(originalConfig);
            } catch (error) {
                return Promise.reject(error);
            }
        }
        return Promise.reject(err);
    }
);
const http = {
    get: app.get,
    post: app.post,
    delete: app.delete,
    put: app.put,
    patch: app.patch
}
export default http