import { defineStore } from 'pinia';
import Api from '@/apis/Api';
import Csrf from '@/apis/Csrf';

export const useVideoStore = defineStore('video', {
  state: () => ({
    videos: []
  }),
  actions: {
    getVideos() {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.get('/videos')
        .then((response) => {
          this.videos = response.data.data;
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    },
    storeVideo(data) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.post('/videos', data)
        .then((response) => {
          this.getVideos();
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    },
    destroySong(songId) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.delete(`/videos/${songId}`)
        .then((response) => {
          this.getVideos();
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    }
  }
});