import { defineStore } from 'pinia';
import Api from '@/apis/Api';
import Csrf from '@/apis/Csrf';

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: {},
    post: {},
    userPosts: []
  }),
  actions: {
    getAllPosts(page) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.get(`/posts?page=${page}`)
        .then((response) => {
          this.posts = response.data;
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    },
    getPostsByUserId(userId) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.get(`/posts/${userId}`)
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
        Api.get(`/posts-by-id/${id}`)
        .then((response) => {
          this.post = response.data.data;
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    },
    storePost(data, userId) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.post('/posts', data)
        .then((response) => {
          this.getPostsByUserId(userId);
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    },
    updatePost(data, id, userId) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.post(`/posts/${id}`, data, {
          params: {
            _method: 'put'
          }
        }).
        then((response) => {
          this.getPostsByUserId(userId);
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    },
    destroyPost(postId, userId) {
      return new Promise((resolve, reject) => {
        Csrf();
        Api.delete(`/posts/${postId}`)
        .then((response) => {
          this.getPostsByUserId(userId);
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });
    }
  }
});