import { defineStore } from 'pinia';
import Api from '@/apis/Api';
import Csrf from '@/apis/Csrf';

export const useSongStore = defineStore('song', {
  actions: {
    storeSong(data) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.post('/songs', data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }).
        then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    }
  }
});