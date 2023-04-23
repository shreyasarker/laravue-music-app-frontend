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

const songStore = useSongStore();

onMounted(() => {
  songStore.getSongs();
});

</script>

<style></style>