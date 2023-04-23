<template>
  <div class="max-w-4xl mx-auto">
    <div class="container">
      <section class="bg-gray-950">
        <div class="max-w-6xl px-6 py-10 mx-auto">
          <h1 class="mt-2 text-2xl font-semibold text-white capitalize lg:text-3xl">
            Profile
            <CustomButton btn-text="Edit Profile" :url="{name: 'account.profile.edit'}" class="text-white text-sm" />
          </h1>
          <ProfileAboutSection />
        </div>
        <ProfileInfoSection />
        <ProfileSongSection />
        <ProfileVideoSection />
        <ProfilePostsSection />
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import CustomButton from '@/components/core/CustomButton.vue';
import ProfileInfoSection from '@/components/partials/profile/ProfileInfoSection.vue';
import ProfileAboutSection from '@/components/partials/profile/ProfileAboutSection.vue';
import ProfileSongSection from '@/components/partials/profile/ProfileSongSection.vue';
import ProfileVideoSection from '@/components/partials/profile/ProfileVideoSection.vue';
import ProfilePostsSection from '@/components/partials/profile/ProfilePostsSection.vue';
import { useSongStore } from '@/store/song.store.js';

const songStore = useSongStore();

onMounted(() => {
  songStore.getSongs();
});

</script>

<style>
</style>