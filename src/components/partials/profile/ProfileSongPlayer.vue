<template>
  <div class="bg-purple-700 rounded">
    <div id="aplayer"></div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import APlayer from 'aplayer';
import 'aplayer/dist/APlayer.min.css';
import { useSongStore } from '@/store/song.store.js';

const songStore = useSongStore();
const songs = computed(() => songStore.songs);

const callThePlayer = () => {
  new APlayer({
    container: document.getElementById('aplayer'),
    theme: '#000000',
    audio: songs.value
  });
}

watch(() => songs.value, (newModel) => {
  if(newModel) {
    callThePlayer();
  }
});

onMounted(() => {
  callThePlayer();
});

</script>

<style>
</style>