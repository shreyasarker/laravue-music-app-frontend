import { defineStore } from 'pinia';
import Api from '@/apis/Api';
import Csrf from '@/apis/Csrf';

export const useVideoStore = defineStore('video', {
  state: () => ({
    videos: []
  }),
  actions: {
    getVideosByUserId(userId) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.get(`/videos/${userId}`)
        .then((response) => {
          this.videos = response.data.data;
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    },
    storeVideo(data, userId) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.post('/videos', data)
        .then((response) => {
          this.getVideosByUserId(userId);
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    },
    destroySong(songId, userId) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.delete(`/videos/${songId}`)
        .then((response) => {
          this.getVideosByUserId(userId);
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    }
  }
});