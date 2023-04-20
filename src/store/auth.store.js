import { defineStore } from 'pinia';
import Api from '@/apis/Api';
import Csrf from '@/apis/Csrf';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    auth: {
      name: null,
      email: null,
      isLoggedIn: false
    }
  }),
  actions: {
    register(data) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.post('/register', data)
        .then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      })
    },
    login(data) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.post('/login', data)
        .then((response) => {
          this.auth = {name: response.data.data.name, email: response.data.data.email, isLoggedIn: true};
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      })
    }
  }
});