import { defineStore } from 'pinia';
import Api from '@/apis/Api';

export const useVideoStore = defineStore('video', {
  state: () => ({
    videos: []
  }),
  actions: {
    getVideosByUserId(userId) {
      return new Promise((resolve, reject) => {
        Api().get(`/videos/${userId}`)
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
        Api().post('/videos', data)
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
        Api().delete(`/videos/${songId}`)
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