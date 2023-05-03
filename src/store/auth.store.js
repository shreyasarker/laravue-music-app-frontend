import { defineStore } from 'pinia';
import Api from '@/apis/Api';
import Crypto from 'crypto-js';
import tokenHelper from '../utils/tokenHelper';

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
    getToken() {
      const store = window.localStorage.getItem(tokenHelper().storageKey);
      if (store) {
        try {
          const bytes = Crypto.AES.decrypt(store, tokenHelper().encryptionToken).toString(Crypto.enc.Utf8);
          const token = JSON.parse(bytes);
          return token;
        } catch (e) {
          window.localStorage.removeItem(tokenHelper().storageKey);
        }
      }

      return null;
    },
    setToken (token) {
      const store = Crypto.AES.encrypt(JSON.stringify({ token }), tokenHelper().encryptionToken).toString();
      return localStorage.setItem(tokenHelper().storageKey, store);
    },
    destroyToken() {
      window.localStorage.removeItem(tokenHelper().storageKey);
    },
    register(data) {
      return new Promise((resolve, reject) => {
        Api().post('/register', data)
        .then((response) => {
          resolve(response);
        }).catch((error) => {
          
          reject(error);
        })
      })
    },
    login(data) {
      return new Promise((resolve, reject) => {
        Api().post('/login', data)
        .then((response) => {
          this.setAuthUserData(response.data.user);
          this.setToken(response.data.token);
          resolve(response);
        }).catch((error) => {
          console.log(error);
          reject(error);
        })
      })
    },
    logout() {
      return new Promise((resolve, reject) => {
        Api().post('/logout')
        .then((response) => {
          this.destroyToken();
          this.resetAuthUserData();
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      })
    },
    getAuthUser() {
      return new Promise((resolve, reject) => {
        Api().get('/auth-users')
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