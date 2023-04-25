<template>
  <div class="w-full bg-black border-b border-purple-950 shadow-2xl shadow-inner">
    <nav>
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <router-link to="/" class="flex items-center">
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">MusicApp</span>
        </router-link>
        <button @click="toggleNav" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div :class="showMenu ? 'flex' : 'hidden'" class="w-full md:block md:w-auto" id="navbar-default">
          <ul class="w-full font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <router-link :to="{name: 'home'}" class="block py-2 pl-3 pr-4 text-white bg-purple-700 md:bg-transparent md:text-purple-400 md:p-0">
                Home
              </router-link>
            </li>
            <li v-if="!authUser.id">
              <router-link :to="{name: 'register'}" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:text-purple-700 md:hover:bg-transparent md:border-0 md:hover:text-purple-400 md:p-0">
                Register
              </router-link>
            </li>
            <li v-if="!authUser.id">
              <router-link :to="{name: 'login'}" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:text-purple-700 md:hover:bg-transparent md:border-0 md:hover:text-purple-400 md:p-0">
                Login
              </router-link>
            </li>
            <li v-if="authUser.id">
              <router-link :to="{name: 'account.profile', params: {id: authUser.id}}" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:text-purple-700 md:hover:bg-transparent md:border-0 md:hover:text-purple-400 md:p-0">
                Profile
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'account.profile.posts'}" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:text-purple-700 md:hover:bg-transparent md:border-0 md:hover:text-purple-400 md:p-0">
                Posts
              </router-link>
            </li>
            <li v-if="authUser.id">
              <a @click="logout" href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 hover:text-purple-700 md:hover:bg-transparent md:border-0 md:hover:text-purple-400 md:p-0">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth.store.js';

const showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
const router = useRouter();
const authStore = useAuthStore();

const authUser = computed(() => authStore.auth);

const logout = async () => {
  await authStore.logout();
  router.push({name: 'home'});
}

</script>

<style>
</style>