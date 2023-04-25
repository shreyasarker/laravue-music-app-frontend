<template>
  <div class="max-w-4xl mx-auto">
    <div class="container">
      <div class="w-full p-6 flex justify-center">
        <div class="w-3/4 bg-black p-8 mb-6">
          <h1 class="mb-6 text-lg text-gray-100 font-thin text-center">
            Add Post
            <div class="w-full h-1 mt-2 bg-purple-700"></div>
          </h1>
          <Form @submit="handleSubmit" :validation-schema="schema">
            <CustomInput name="title" type="text" label="Title" />
            <CustomInput name="location" type="text" label="Location" />
            <CropperButton v-bind="imageData" label="Post Image" btnText="Add Post Image" @showModal="showModal = true"/>
            <CustomInput name="image" type="hidden" :value="imageUrl" label="Image" />
            <CroppedImage v-if="imageUrl" label="Cropped Image" :image="imageUrl" />
            <CustomInput name="description" type="textarea" label="Description" />
            <SubmitButton btnText="Create Post" :isLoading="isLoading"/>
          </Form>
        </div>
      </div>
    </div>
    <CropperModal v-if="showModal"
      :minAspectRatioProp="{width: 16, height: 9}"
      :maxAspectRatioProp="{width: 16, height: 9}"
      @croppedImageData="setCroppedImageData"
      @showModal="showModal = false" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import CustomInput from '@/components/core/CustomInput.vue';
import CropperButton from '@/components/core/CropperButton.vue';
import SubmitButton from '@/components/core/SubmitButton.vue';
import CropperModal from '@/components/core/CropperModal.vue';
import CroppedImage from '@/components/core/CroppedImage.vue';
import { useAuthStore } from '@/store/auth.store.js';
import { usePostStore } from '@/store/post.store.js';
import { successToast, errorToast } from '@/utils/toast';

const schema = Yup.object().shape({
  title: Yup.string('The title must be a string.').required('The title field is required.').max(255, 'The title may not be greater than 255 characters.'),
  location: Yup.string('The location must be a string.').required('The location field is required.').max(255, 'The location may not be greater than 255 characters.'),
  description: Yup.string('The description must be a string.').required('The description field is required.').max(2000, 'The description may not be greater than 2000 characters.'),
  image: Yup.string()
});

const router = useRouter();
const authStore = useAuthStore();
const postStore = usePostStore();

const authUser = computed(() => authStore.auth);
const showModal = ref(false);
let imageData = ref(null);
const imageUrl = ref(null);
const isLoading = ref(false);

const setCroppedImageData = (data) => {
  imageData.value = data
  imageUrl.value = data.imageUrl
}

const handleSubmit = async (data, { setErrors }) => {
  isLoading.value = true;
  try {
    const response = await postStore.storePost(data, authUser.value.id);
    isLoading.value = false;
    successToast(response.data.message);
    router.push({name: 'account.profile', params: {id: authUser.value.id}});
  } catch (error) {
    console.log(error);
    isLoading.value = false;
    if (error.response.data.errors) {
      setErrors(error.response.data.errors);
    }
    errorToast(error.response.data.message);
  }
}

</script>

<style>
</style>
