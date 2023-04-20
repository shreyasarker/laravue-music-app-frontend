<template>
  <div class="w-full py-4">
    <div class="text-white text-xl mb-2">Posts</div>
    <div class="bg-purple-700 w-full h-1"></div>
    <div class="flex justify-end my-4">
      <CustomButton btn-text="Create Post" :url="{name: 'account.profile.add-post'}" class="text-white text-sm"/>
    </div>
    <div class="flex flex-justify-center items-center mb-4">
      <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img class="object-cover w-full h-64" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article">
        <div class="p-6">
          <div>
            <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
            <a href="#" class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">I Built A Successful Blog In One Year</a>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
          </div>
          <div class="mt-4">
            <div class="flex justify-end">
              <CustomButton btn-text="Edit Post" :url="{name: 'account.profile.edit-post'}" class="text-gray-500 text-sm mr-2"/>
              <CustomButton btn-text="Delete Post" :url="{}" class="text-gray-500 text-sm"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomButton from '@/components/core/CustomButton.vue';

</script>

<style>
</style>