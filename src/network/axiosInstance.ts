import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://64506bd6e1f6f1bb22976abc.mockapi.io/",
    timeout:1000
})