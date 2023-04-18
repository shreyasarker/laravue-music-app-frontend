<template>
  <div id="hero-section">
    <div class="px-4 md-w-3/4 lg:w-2/3 mx-auto text-center">
      <h1 class="text-4xl sm:text-5xl md:text-5xl leading-tight text-center text-gray-100 mb-3">
        <b>LaraVue Music App</b>
      </h1>
      <p class="py-2 text-xl text-center text-gray-300 mb-4">Login or Register now to have an amazing experience of Music</p>
    </div>
    <div class="mt-4"></div>
    <div class="flex justify-between">
      <router-link :to="{name: 'login'}" class="w-full mr-1 py-2 px-4 font-semibold text-2xl rounded-lg text-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 cursor-pointer">
        Login
      </router-link>
      <router-link :to="{name: 'register'}" class="w-full mr-1 py-2 px-4 font-semibold text-2xl rounded-lg text-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 cursor-pointer">
        Register
      </router-link>
    </div>
  </div>
  <div id="video-overlay"></div>
  <video autoplay muted loop id="video">
    <source src="../../assets/videos/home-video.mp4" type="video/mp4"/>
  </video>
</template>

<script setup>
</script>

<style lang="scss">
#hero-section {
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
#video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -2;
}
#video-overlay {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.65);
}
</style>