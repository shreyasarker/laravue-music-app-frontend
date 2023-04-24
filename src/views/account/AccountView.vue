<template>
  <TopNavigation />
  <div class="account-section bg-gray-950 pb-6">
    <router-view />
  </div>
  <BottomFooter />
</template>

<script setup>
import { onMounted } from 'vue';
import TopNavigation from '@/components/layouts/TopNavigation.vue';
import BottomFooter from '@/components/layouts/BottomFooter.vue';
import { useSongStore } from '@/store/song.store.js';
import { useVideoStore } from '@/store/video.store.js';
import { usePostStore } from '@/store/post.store.js';

const songStore = useSongStore();
const videoStore = useVideoStore();
const postStore = usePostStore();

onMounted(() => {
  songStore.getSongs();
  videoStore.getVideos();
  postStore.getPostsByUserId();
});

</script>

<style></style>