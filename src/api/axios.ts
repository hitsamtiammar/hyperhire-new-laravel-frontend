import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_ENDPOINT;

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Accept':'application/json',
    }
})

export default instance
