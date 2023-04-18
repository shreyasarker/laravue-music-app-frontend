<template>
  <div class="container max-w-4xl mx-auto flex">
    <div class="w-1/3">
      <img src="https://via.placeholder.com/500" alt="Profile Picture" class="w-full rounded-lg h-auto shadow-lg" />
    </div>
    <div class="w-full pl-4">
      <div class="flex">
        <div class="w-1/2">
          <h1 class="text-2xl md:text-4xl text-lef text-gray-500">
            Shreya S
          </h1>
          <span class="text-md text-gray-700">
            <i><b>Dhaka, Bangladesh</b></i>
          </span>
        </div>
        <div class="w-1/2 mt-2">
          <CustomButton btn-text="Edit Profile" :url="{}"/>
        </div>
      </div>
      <ProfileInfoSection />
      <ProfileAboutSection />
    </div>
  </div>
  <ProfileSongSection />
</template>

<script setup>
import CustomButton from '@/components/core/CustomButton.vue';
import ProfileInfoSection from '@/components/partials/profile/ProfileInfoSection.vue';
import ProfileAboutSection from '@/components/partials/profile/ProfileAboutSection.vue';
import ProfileSongSection from '@/components/partials/profile/ProfileSongSection.vue';

</script>

<style>
</style>