<template>
  <div class="max-w-6xl px-6 py-10 mx-auto">
    <h1 class="mt-2 text-2xl font-semibold text-white capitalize lg:text-3xl">
      Profile
      <CustomButton v-if="isAuthorize" btn-text="Edit Profile" :url="{name: 'account.profile.edit'}" class="text-white text-sm" />
    </h1>
    <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
      <div class="absolute w-full bg-purple-600 -z-10 md:h-96 rounded-2xl"></div>
      <div class="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
        <img v-if="user.image" :src="user.image" class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" alt="Profile photo" />
        <img v-else src="/img/no-user-found.png" class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" alt="Profile photo" />    
        <div class="mt-2 md:mx-6">
          <div>
            <p class="text-xl font-medium tracking-tight text-white">{{ user.name }}</p>
            <p class="text-blue-200 ">{{ user.location }}</p>
          </div>
          <p class="mt-4 text-lg leading-relaxed text-white md:text-xl">{{ user.description }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import CustomButton from '@/components/core/CustomButton.vue';
import { useAuthStore } from '@/store/auth.store.js';
import { useProfileStore } from '@/store/profile.store.js';

const authStore = useAuthStore();
const profileStore = useProfileStore();

const authUser = computed(() => authStore.auth);
const user = computed(() => profileStore.user);

const isAuthorize = computed(() => {
  if(authUser.value && authUser.value.id) {
    return authUser.value.id === user.value.id;
  }
  return false;
});

</script>

<style></style>