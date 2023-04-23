<template>
  <div class="w-full py-4">
    <div class="text-white text-xl mb-2">Videos</div>
    <div class="bg-purple-700 w-full h-1"></div>
    <div class="flex justify-end my-4">
      <CustomButton btn-text="Add Video" :url="{name: 'account.profile.add-video'}" class="text-white text-sm mr-2"/>
      <CustomButton btn-text="Delete Video" :url="{name: 'account.profile.delete-video'}" class="text-white text-sm" />
    </div>
    <div v-for="(video, index) in videos" :key="index" class="flex flex-wrap mb-4">
      <div class="my-1 px-1 w-full md:w-1/2 lg:w-1/2">
        <div class="text-xl text-white">{{ video.title }}</div>
        <iframe :src="video.url" class="w-full h-60"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import CustomButton from '@/components/core/CustomButton.vue';
import { useVideoStore } from '@/store/video.store.js';

const videoStore = useVideoStore();

const videos = computed(() => videoStore.videos);
</script>

<style>
</style>