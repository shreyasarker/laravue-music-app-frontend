<template>
  <TopNavigation />
  <div class="account-section bg-gray-950 pb-6">
    <router-view />
  </div>
  <BottomFooter />
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import TopNavigation from '@/components/layouts/TopNavigation.vue';
import BottomFooter from '@/components/layouts/BottomFooter.vue';
import { useProfileStore } from '@/store/profile.store.js';
import { useSongStore } from '@/store/song.store.js';
import { useVideoStore } from '@/store/video.store.js';
import { usePostStore } from '@/store/post.store.js';

const route = useRoute();
const userId = route.params.id;
const profileStore = useProfileStore();
const songStore = useSongStore();
const videoStore = useVideoStore();
const postStore = usePostStore();

onMounted(async () => {
  await profileStore.getUser(userId);
  await songStore.getSongsByUserId(userId);
  await videoStore.getVideosByUserId(userId);
  await postStore.getPostsByUserId(userId);
});

</script>

<style></style>