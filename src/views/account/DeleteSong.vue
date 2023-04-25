<template>
  <div class="max-w-4xl mx-auto">
    <div class="container h-screen">
      <div class="w-full p-6 flex justify-center">
        <div class="w-3/4 bg-black p-8 mb-6">
          <h1 class="mb-6 text-lg text-gray-100 font-thin text-center">
            Delete Song
            <div class="w-full h-1 mt-2 bg-purple-700"></div>
          </h1>
          <div class="px-8 pt-6 pb-8">
            <div v-for="(song, index) in songs" :key="index" class="flex flex-wrap">
              <div class="mr-auto mt-2 text-lg text-white">
                <font-awesome-icon icon="music" /> {{ song.name }}
              </div>
              <div class="w-1/4 ml-auto p-1">
                <button @click="handleClick(song.id)" class="float-right bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ConfirmDialogue v-if="show" title="Delete Song" @confirm="handleDelete" @showConfirmationDialogue="show=!show"/>
</template>

<script setup>
import { computed, ref } from 'vue';
import ConfirmDialogue from '@/components/core/ConfirmDialogue.vue';
import { useAuthStore } from '@/store/auth.store.js';
import { useSongStore } from '@/store/song.store.js';
import { errorToast, successToast } from '@/utils/toast';

const authStore = useAuthStore();
const songStore = useSongStore();
const show = ref(false);
const songId = ref(null);

const authUser = computed(() => authStore.auth);
const songs = computed(() => songStore.songs);

const handleClick = (value) => {
  show.value = true;
  songId.value = value;
}

const handleDelete = async (value) => {
  if (value === 'no') {
    return;
  }
  try {
    const response = await songStore.destroySong(songId.value, authUser.value.id);
    successToast(response.data.message);
  } catch (error) {
    errorToast(error.response.data.message);
  }
}


</script>

<style>
</style>
