import { defineStore } from 'pinia';
import Api from '@/apis/Api';
import { useAuthStore } from './auth.store.js';

export const useUserStore = defineStore('user', {
  actions: {
    updateUser(data) {
      return new Promise((resolve, reject) => {
        Api().post('/users', data, {
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