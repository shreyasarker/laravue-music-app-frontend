<template>
  <TopNavigation />
  <div class="account-section bg-gray-950 pb-6">
    <div class="max-w-4xl mx-auto">
      <router-view />
    </div>
  </div>
  <BottomFooter />
</template>

<script setup>
import TopNavigation from '@/components/layouts/TopNavigation.vue';
import BottomFooter from '@/components/layouts/BottomFooter.vue';

</script>

<style></style>