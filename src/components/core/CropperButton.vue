<template>
  <div class="mb-6">
    <label class="block uppercase tracking-wide text-gray-900 text-xs font-bold">
      {{ label }}
    </label>
    <button @click="emit('showModal', true)" type="button" class="inline-block bg-gray-200 hover:bg-gray-300 text-purple-700 no-underline px-2 py-1">
      {{ btnText }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, toRefs } from 'vue';

const props = defineProps({
  btnText: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['showModal']);

const { btnText, label } = toRefs(props);

</script>

<style>
</style>