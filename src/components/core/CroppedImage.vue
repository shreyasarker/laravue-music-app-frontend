<template>
  <div class="mb-6">
    <label class="block uppercase tracking-wide text-xs font-bold text-gray-900">
      {{ label }}
    </label>
    <img :src="image" class="w-full border-solid border-2" />
  </div>
</template>

<script setup>
  import { toRefs } from 'vue';

  const props = defineProps({ label: String, image: String })
  const { label, image } = toRefs(props);
  
</script>

<style>
</style>