<template>
  <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
    <div class="absolute w-full bg-purple-600 -z-10 md:h-96 rounded-2xl"></div>
    <div class="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
      <img :src="authUser.image" class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" alt="Profile photo" />   
      <div class="mt-2 md:mx-6">
        <div>
          <p class="text-xl font-medium tracking-tight text-white">{{ authUser.name }}</p>
          <p class="text-blue-200 ">{{ authUser.location }}</p>
        </div>
        <p class="mt-4 text-lg leading-relaxed text-white md:text-xl">{{ authUser.description }}</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '@/store/auth.store.js';
const authStore = useAuthStore();

const authUser = computed(() => authStore.auth);

</script>

<style></style>