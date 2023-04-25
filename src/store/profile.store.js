import { defineStore } from 'pinia';
import Api from '@/apis/Api';
import Csrf from '@/apis/Csrf';

export const useProfileStore = defineStore('user', {
  state: () => ({
    user: {}
  }),
  actions: {
    getUser(id) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.get(`/users/${id}`)
        .then((response) => {
          this.user = response.data.data;
          resolve(response);
        }).catch((error) => {
          this.logout();
          reject(error);
        })
      })
    }
  }
});