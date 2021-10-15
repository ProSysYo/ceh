import axios from "axios"

const defaultOptions = {
    baseURL: "http://localhost:5000",
    headers: {
        "Content-type": "application/json",        
    }
}

export const http = axios.create(defaultOptions)

// let http = axios.create(defaultOptions)
// http.interceptors.request.use(function (config) {
//     const token = localStorage.getItem('token');
//     config.headers.Authorization =  token ? `Bearer ${token}` : '';
//     return config;
// })

// export { http }