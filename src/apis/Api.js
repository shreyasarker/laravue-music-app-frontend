import axios from 'axios';

const Api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

export default Api;