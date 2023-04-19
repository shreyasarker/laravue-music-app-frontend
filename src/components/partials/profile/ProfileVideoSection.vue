<template>
  <div class="w-full py-4">
    <div class="text-white text-xl mb-2">Videos</div>
    <div class="bg-purple-700 w-full h-1"></div>
    <div class="flex justify-end my-4">
      <CustomButton btn-text="Add Video" :url="{name: 'account.profile.add-video'}" class="text-white text-sm mr-2"/>
      <CustomButton btn-text="Delete Video" :url="{name: 'account.profile.delete-video'}" class="text-white text-sm" />
    </div>
    <div class="flex flex-wrap mb-4">
      <div class="my-1 px-1 w-full md:w-1/2 lg:w-1/2">
        <div class="text-xl text-white">Video Title</div>
        <iframe src="https://www.youtube.com/embed/e3-5YC_oHjE" class="w-full h-60"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomButton from '@/components/core/CustomButton.vue';

</script>

<style>
</style>