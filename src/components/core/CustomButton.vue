<template>
  <router-link :to="url" class="float-right bg-transparent text-gray-900 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded hover:bg-purple-700 border-purple-700">
    {{ btnText }}
  </router-link>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  btnText: {
    type: String,
    required: true
  },
  url: {
    required: false
  }
});

const { btnText, url } = toRefs(props);

</script>

<style>
</style>