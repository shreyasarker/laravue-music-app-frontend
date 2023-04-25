<template>
  <div class="w-full py-4">
    <div class="text-white text-xl mb-2">Videos</div>
    <div class="bg-purple-700 w-full h-1"></div>
    <div v-if="isAuthorize" class="flex justify-end my-4">
      <CustomButton btn-text="Add Video" :url="{name: 'account.profile.add-video'}" class="text-white text-sm mr-2"/>
      <CustomButton btn-text="Delete Video" :url="{name: 'account.profile.delete-video'}" class="text-white text-sm" />
    </div>
    <div v-if="videos && videos.length > 0" class="grid grid-cols-1 gap-8 mt-8 md:mt-16 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2">
      <div v-for="(video, index) in videos" :key="index">
        <div class="my-1 px-1 w-full">
          <div class="text-xl text-white">{{ video.title }}</div>
          <iframe :src="video.url" class="w-full h-60"></iframe>
        </div>
      </div>
    </div>
    <div v-else class="text-white semibold">No video</div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import CustomButton from '@/components/core/CustomButton.vue';
import { useAuthStore } from '@/store/auth.store.js';
import { useProfileStore } from '@/store/profile.store.js';
import { useVideoStore } from '@/store/video.store.js';

const authStore = useAuthStore();
const profileStore = useProfileStore();
const videoStore = useVideoStore();

const authUser = computed(() => authStore.auth);
const user = computed(() => profileStore.user);
const videos = computed(() => videoStore.videos);

const isAuthorize = computed(() => {
  if(authUser.value && authUser.value.id) {
    return authUser.value.id === user.value.id;
  }
  return false;
});

</script>

<style>
</style>