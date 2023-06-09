<template>
  <div class="w-full py-4">
    <div class="text-white text-xl mb-2">Posts</div>
    <div class="bg-purple-700 w-full h-1"></div>
    <div v-if="isAuthorize" class="flex justify-end my-4">
      <CustomButton btn-text="Create Post" :url="{name: 'account.profile.add-post'}" class="text-white text-sm"/>
    </div>
    <div v-if="posts && posts.length > 0" class="grid grid-cols-1 gap-8 mt-8 md:mt-16 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
      <div v-for="(post, index) in posts" :key="index" class="h-100">
      <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 min-h-full">
        <img v-if="post.image" :src="post.image" class="object-cover w-full h-64" alt="Article">
        <div class="p-6">
          <div>
            <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{{ post.location }}</span>
            <router-link :to="{name: 'account.profile.post-by-id', params: {id: post.id}}" class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{{ post.title }}</router-link>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ post.description_excerpt }}</p>
          </div>
          <div class="mt-4">
            <div v-if="isAuthorize" class="flex justify-end">
              <CustomButton btn-text="Edit Post" :url="{name: 'account.profile.edit-post', params: {id: post.id}}" class="text-gray-500 text-sm mr-2"/>
              <CustomButton @click="handleClick(post.id)" btn-text="Delete Post" :url="{}" class="text-gray-500 text-sm"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div v-else class="text-white semibold">No post</div>
  </div>
  <ConfirmDialogue v-if="show" title="Delete Post" @confirm="handleDelete" @showConfirmationDialogue="show=!show"/>
</template>

<script setup>
import { computed, ref } from 'vue';
import CustomButton from '@/components/core/CustomButton.vue';
import { useAuthStore } from '@/store/auth.store.js';
import { useProfileStore } from '@/store/profile.store.js';
import { usePostStore } from '@/store/post.store.js';
import ConfirmDialogue from '@/components/core/ConfirmDialogue.vue';
import { errorToast, successToast } from '@/utils/toast';

const authStore = useAuthStore();
const profileStore = useProfileStore();
const postStore = usePostStore();
const show = ref(false);
const postId = ref(null);

const authUser = computed(() => authStore.auth);
const user = computed(() => profileStore.user)
const posts = computed(() => postStore.userPosts);

const isAuthorize = computed(() => {
  if(authUser.value && authUser.value.id) {
    return authUser.value.id === user.value.id;
  }
  return false;
});

const handleClick = (value) => {
  show.value = true;
  postId.value = value;
}

const handleDelete = async (value) => {
  if (value === 'no') {
    return;
  }
  try {
    const response = await postStore.destroyPost(postId.value, authUser.value.id);
    successToast(response.data.message);
  } catch (error) {
    errorToast(error.response.data.message);
  }
}

</script>

<style>
</style>