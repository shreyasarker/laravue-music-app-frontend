<template>
  <div class="bg-purple-700 rounded">
    <div id="aplayer"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import APlayer from 'aplayer';
import 'aplayer/dist/APlayer.min.css';

const callThePlayer = () => {
  new APlayer({
    container: document.getElementById('aplayer'),
    theme: '#000000',
    audio: [
    {
      name: 'Cyber Punk',
      artist: 'artist',
      url: '/music/cyber-punk-21548.mp3',
      cover: 'cover.jpg'
    },
    {
      name: 'Hip Hop Bach',
      artist: 'artist',
      url: '/music/hip-hop-bach-127187.mp3',
      cover: 'cover.jpg'
    },
    {
      name: 'Ethnic Background',
      artist: 'artist',
      url: '/music/ethnic-background-music-for-short-video-1-minute-dance-hip-hop-beat-144565.mp3',
      cover: 'cover.jpg'
    },
    {
      name: 'Let it go',
      artist: 'artist',
      url: '/music/let-it-go-12279.mp3',
      cover: 'cover.jpg'
    },
    {
      name: 'Dead by Daylight',
      artist: 'artist',
      url: '/music/dead-by-daylight-10243.mp3',
      cover: 'cover.jpg'
    }
  ]
});
}

onMounted(() => {
  callThePlayer();
});

</script>

<style>
</style>