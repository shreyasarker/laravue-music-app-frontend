import { defineStore } from 'pinia';
import Api from '@/apis/Api';
import Csrf from '@/apis/Csrf';

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [],
    post: {},
    userPosts : []
  }),
  actions: {
    getAllPosts() {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.get('/posts')
        .then((response) => {
          this.posts = response.data.data;
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    },
    getPostsByUserId() {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.get('/posts-by-user-id')
        .then((response) => {
          this.userPosts = response.data.data;
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    },
    getPostById(id) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.get(`/posts/${id}`)
        .then((response) => {
          this.post = response.data.data;
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    },
    storePost(data) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.post('/posts', data)
        .then((response) => {
          this.getPostsByUserId();
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    },
    updatePost(data, id) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.post(`/posts/${id}`, data, {
          params: {
            _method: 'put'
          }
        }).
        then((response) => {
          this.getPostsByUserId();
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    },
    destroyPost(postId) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.delete(`/posts/${postId}`)
        .then((response) => {
          this.getPostsByUserId();
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    }
  }
});