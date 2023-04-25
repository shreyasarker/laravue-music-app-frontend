<template>
  <div class="container">
    <div class="w-full p-6">
      <div class="bg-black p-8 mb-6">
        <h1 class="mb-6 text-lg text-gray-100 font-thin text-center">
          Posts
          <div class="w-full h-1 mt-2 bg-purple-700"></div>
        </h1>
        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
          <div v-for="(post, index) in posts.data" :key="index">
            <div class="relative">
              <img v-if="post.image" :src="post.image" class="object-cover object-center w-full h-64 rounded-lg lg:h-80" alt="post image">
              <div class="absolute bottom-0 flex p-3 bg-gray-900 ">
                <img v-if="post.author_image" :src="post.author_image" class="object-cover object-center w-10 h-10 rounded-full" alt="author image">
                <div class="mx-4">
                  <h1 class="text-sm text-gray-200">{{ post.author }}</h1>
                  <p class="text-sm text-gray-400">{{ post.location }}</p>
                </div>
              </div>
            </div>
            <h1 class="mt-6 text-xl font-semibold text-white">{{ post.title }}</h1>
            <hr class="w-32 my-6 text-purple-500">
            <p class="text-sm text-gray-400">{{ post.description_excerpt }}</p>
            <router-link :to="{name: 'account.profile.post-by-id', params: {id: post.id}}" class="inline-block mt-4 text-purple-500 underline hover:text-purple-400">Read more</router-link>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <TailwindPagination
          :item-classes="['bg-black', 'text-white', 'border-white', 'hover:bg-purple-700']"
          :active-classes="['bg-purple-700', 'border-white', 'text-white']"
          :data="posts"
          @pagination-change-page="getPosts"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { usePostStore } from '@/store/post.store.js';
import { TailwindPagination } from 'laravel-vue-pagination';

const postStore = usePostStore();
const posts = computed(() => postStore.posts);

const getPosts = async (page = 1) => {
  await postStore.getAllPosts(page);
}
onMounted(() => {
  getPosts();
});

</script>

<style>
</style>
