<template>
  <div class="mx-auto py-4">
    <div class="text-gray-900 text-xl">Songs</div>
    <div class="bg-purple-700 w-full h-1"></div>
    <div class="w-full mt-4">
      <CustomButton btn-text="Delete Song" :url="{}" class="ml-2"/>
      <CustomButton btn-text="Add Song" :url="{}" />
    </div>
  </div>
</template>

<script setup>
import CustomButton from '@/components/core/CustomButton.vue';

</script>

<style>
</style>