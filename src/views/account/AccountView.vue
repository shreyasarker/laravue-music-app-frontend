<template>
  <TopNavigation />
  <div class="account-section bg-gray-950">
    <div class="max-w-4xl mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import TopNavigation from '@/components/layouts/TopNavigation.vue';

</script>

<style></style>