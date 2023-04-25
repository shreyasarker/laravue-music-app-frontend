import { defineStore } from 'pinia';
import Api from '@/apis/Api';
import Csrf from '@/apis/Csrf';

export const useSongStore = defineStore('song', {
  state: () => ({
    songs: []
  }),
  actions: {
    getSongsByUserId(userId) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.get(`/songs/${userId}`)
        .then((response) => {
          this.songs = response.data.data;
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    },
    storeSong(data, userId) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.post('/songs', data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }).
        then((response) => {
          this.getSongsByUserId(userId);
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    },
    destroySong(songId, userId) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.delete(`/songs/${songId}`)
        .then((response) => {
          this.getSongsByUserId(userId);
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    }
  }
});