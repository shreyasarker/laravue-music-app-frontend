import { defineStore } from 'pinia';
import Api from '@/apis/Api';
import Csrf from '@/apis/Csrf';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    auth: {}
  }),
  actions: {
    setAuthUserData(payload) {
      this.auth = payload;
      this.auth.isLoggedIn = true;
    },
    resetAuthUserData() {
      this.auth = {};
    },
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
          this.setAuthUserData(response.data.data);
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      })
    },
    logout() {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.post('/logout')
        .then((response) => {
          this.resetAuthUserData();
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      })
    },
    getAuthUser() {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.get('/auth-users')
        .then((response) => {
          this.setAuthUserData(response.data.data);
          resolve(response);
        }).catch((error) => {
          this.logout();
          reject(error);
        })
      })
    }
  }
});