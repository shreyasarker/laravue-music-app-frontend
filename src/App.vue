<template>
  <router-view/>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '@/store/auth.store.js';

const authStore = useAuthStore();

onMounted(() => {
  authStore.getAuthUser();
});

</script>

<style lang="scss">

</style>
