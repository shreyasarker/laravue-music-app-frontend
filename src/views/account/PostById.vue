<template>
  <div class="container">
    <div class="w-full p-6">
      <div class="bg-black p-8 mb-6">
        <h1 class="mb-6 text-lg text-gray-100 font-thin text-center">
          Post By ID
          <div class="w-full h-1 mt-2 bg-purple-700"></div>
        </h1>
        <div v-if="post" class="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img v-if="post.image" :src="post.image" class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"  alt="post image">
          <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <p class="block mt-4 text-2xl font-semibold text-white">
              {{ post.title }}
            </p>
            <p class="mt-3 text-sm text-gray-300 md:text-sm">
              {{ post.description }}
            </p>
            <router-link v-if="post.author_id" :to="{name: 'account.profile', params: {id: post.author_id}}" class="hover:text-white">
              <div class="flex items-center mt-6">
                <img v-if="post.author_image" :src="post.author_image" class="object-cover object-center w-10 h-10 rounded-full" alt="author image">
                <div class="mx-4">
                  <h1 class="text-sm text-gray-200">{{ post.author_name }}</h1>
                  <p class="text-sm text-gray-400">{{ post.location }}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePostStore } from '@/store/post.store.js';

const route = useRoute();
const postId = route.params.id;
const postStore = usePostStore();
const post = computed(() => postStore.post);

onMounted(async () => {
  await postStore.getPostById(postId);
});

</script>

<style></style>