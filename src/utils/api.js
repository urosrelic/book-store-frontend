import axios from 'axios';

// Create axios instance with conditional base URL
const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BOOK_STORE_BACKEND_HOST}`
});

export default axiosInstance;
