import axios from 'axios';
import { useAuthStore } from '../store/auth.store';

let BaseApi = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

let Api = () => {
  const authStore = useAuthStore();
 const isTokenExists = authStore.getToken();
 if(isTokenExists) {
  BaseApi.defaults.headers.common['Authorization'] = `Bearer ${isTokenExists.token}`;
 }
 return BaseApi;
}

export default Api;