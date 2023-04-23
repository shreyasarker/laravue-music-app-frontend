import { defineStore } from 'pinia';
import Api from '@/apis/Api';
import Csrf from '@/apis/Csrf';

export const useSongStore = defineStore('song', {
  state: () => ({
    songs: []
  }),
  actions: {
    getSongs() {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.get('/songs')
        .then((response) => {
          this.songs = response.data.data;
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    },
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
    },
    destroySong(songId) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.delete(`/songs/${songId}`)
        .then((response) => {
          this.getSongs();
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    }
  }
});