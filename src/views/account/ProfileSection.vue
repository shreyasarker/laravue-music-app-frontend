<template>
  <div class="max-w-4xl mx-auto">
    <div class="container">
      <section class="bg-gray-950">
        <ProfileAboutSection />
        <ProfileSongSection />
        <ProfileVideoSection />
        <ProfilePostsSection />
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import ProfileAboutSection from '@/components/partials/profile/ProfileAboutSection.vue';
import ProfileSongSection from '@/components/partials/profile/ProfileSongSection.vue';
import ProfileVideoSection from '@/components/partials/profile/ProfileVideoSection.vue';
import ProfilePostsSection from '@/components/partials/profile/ProfilePostsSection.vue';
import { useAuthStore } from '@/store/auth.store.js';
import { useProfileStore } from '@/store/profile.store.js';
import { useSongStore } from '@/store/song.store.js';
import { useVideoStore } from '@/store/video.store.js';
import { usePostStore } from '@/store/post.store.js';

const route = useRoute();
const authStore = useAuthStore();
const profileStore = useProfileStore();
const songStore = useSongStore();
const videoStore = useVideoStore();
const postStore = usePostStore();

const authUser = computed(() => authStore.auth);
const userId = computed(() => {
  if(route.params.id) {
    
    return route.params.id;
  }
  return authUser.value.id;
});

onMounted(async () => {
  await profileStore.getUser(userId.value);
  await songStore.getSongsByUserId(userId.value);
  await videoStore.getVideosByUserId(userId.value);
  await postStore.getPostsByUserId(userId.value);
});
</script>

<style>
</style>