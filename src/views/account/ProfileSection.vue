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
import ProfileAboutSection from '@/components/partials/profile/ProfileAboutSection.vue';
import ProfileSongSection from '@/components/partials/profile/ProfileSongSection.vue';
import ProfileVideoSection from '@/components/partials/profile/ProfileVideoSection.vue';
import ProfilePostsSection from '@/components/partials/profile/ProfilePostsSection.vue';

</script>

<style>
</style>