import { defineStore } from 'pinia';
import Api from '@/apis/Api';
import { useAuthStore } from './auth.store';

export const useProfileStore = defineStore('user', {
  state: () => ({
    user: {}
  }),
  actions: {
    getUser(userId) {
      return new Promise((resolve, reject) => {
        Api().get(`/users/${userId}`)
        .then((response) => {
          this.user = response.data.data;
          resolve(response);
        }).catch((error) => {
          this.logout();
          reject(error);
        })
      })
    },
    updateUser(data, userId) {
      return new Promise((resolve, reject) => {
        Api().post('/users', data, {
          params: {
            _method: 'put'
          }
        }).
        then((response) => {
          this.getUser(userId);
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