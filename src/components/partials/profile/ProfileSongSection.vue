<template>
  <div class="w-full py-4">
    <div class="text-white text-xl mb-2">Songs</div>
    <div class="bg-purple-700 w-full h-1"></div>
    <div class="flex justify-end my-4">
      <CustomButton v-if="isAuthorize" btn-text="Add Song" :url="{name: 'account.profile.add-song'}" class="text-white text-sm mr-2"/>
      <CustomButton v-if="isAuthorize" btn-text="Delete Song" :url="{name: 'account.profile.delete-song'}" class="text-white text-sm" />
    </div>
    <div class="pb-4">
      <ProfileSongPlayer />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import CustomButton from '@/components/core/CustomButton.vue';
import ProfileSongPlayer from './ProfileSongPlayer.vue';
import { useAuthStore } from '@/store/auth.store.js';
import { useProfileStore } from '@/store/profile.store.js';

const authStore = useAuthStore();
const profileStore = useProfileStore();

const authUser = computed(() => authStore.auth);
const user = computed(() => profileStore.user);

const isAuthorize = computed(() => {
  if(authUser.value && authUser.value.id) {
    return authUser.value.id === user.value.id;
  }
  return false;
});

</script>

<style>
</style>