<template>
  <div class="w-full py-4">
    <div class="text-white text-xl mb-2">Songs</div>
    <div class="bg-purple-700 w-full h-1"></div>
    <div class="flex justify-evenly my-4">
      <span class="flex">
        <CustomButton btn-text="Add Song" :url="{}" class="text-white text-sm"/>
      </span>
      <span class="flex">
        <CustomButton btn-text="Delete Song" :url="{}" class="text-white text-sm" />
      </span>
    </div>
    <div class="pb-4">
      <ProfileSongPlayer />
    </div>
  </div>
</template>

<script setup>
import CustomButton from '@/components/core/CustomButton.vue';
import ProfileSongPlayer from './ProfileSongPlayer.vue';

</script>

<style>
</style>