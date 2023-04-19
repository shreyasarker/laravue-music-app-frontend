<template>
<div class="container">
  <section class="bg-gray-950">
    <div class="max-w-6xl px-6 py-10 mx-auto">
      <h1 class="mt-2 text-2xl font-semibold text-white capitalize lg:text-3xl">
        Profile
        <CustomButton btn-text="Edit Profile" :url="{}" class="text-white text-sm" />
      </h1>
      <ProfileAboutSection />
    </div>
    <ProfileInfoSection />
    <ProfileSongSection />
  </section>
</div>
</template>

<script setup>
import CustomButton from '@/components/core/CustomButton.vue';
import ProfileInfoSection from '@/components/partials/profile/ProfileInfoSection.vue';
import ProfileAboutSection from '@/components/partials/profile/ProfileAboutSection.vue';
import ProfileSongSection from '@/components/partials/profile/ProfileSongSection.vue';

</script>

<style>
</style>