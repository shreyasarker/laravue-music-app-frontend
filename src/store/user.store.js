import { defineStore } from 'pinia';
import Api from '@/apis/Api';
import Csrf from '@/apis/Csrf';
import { useAuthStore } from './auth.store.js';

export const useUserStore = defineStore('user', {
  actions: {
    updateUser(data) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.post('/users', data, {
          params: {
            _method: 'put'
          }
        }).
        then((response) => {
          const authStore = useAuthStore();
          authStore.getAuthUser();
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    }
  }
});