<template>
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
          <CropperButton label="Post Image" btnText="Add Post Image" @showModal="showModal = true"/>
          <CroppedImage v-if="image" label="Cropped Image" :image="image" />
          <CustomInput name="description" type="textarea" label="description" />
          <SubmitButton btnText="Create Post" :isLoading="false"/>
        </Form>
      </div>
    </div>
  </div>
  <CropperModal v-if="showModal"
    :minAspectRatioProp="{width: 16, height: 9}"
    :maxAspectRatioProp="{width: 16, height: 9}"
    @croppedImageData="setCroppedImageData"
    @showModal="showModal = false" />
</template>

<script setup>
import { ref } from 'vue';
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import CustomInput from '@/components/core/CustomInput.vue';
import CropperButton from '@/components/core/CropperButton.vue';
import SubmitButton from '@/components/core/SubmitButton.vue';
import CropperModal from '@/components/core/CropperModal.vue';
import CroppedImage from '@/components/core/CroppedImage.vue';

const schema = Yup.object().shape({
  title: Yup.string().required('The name field is required.'),
  location: Yup.string().required('The location field is required.'),
  description: Yup.string().required('The description field is required.')
});

const showModal = ref(false);
let imageData = null;
const image = ref(null);
const isLoading = ref(false);

const setCroppedImageData = (data) => {
  imageData = data
  image.value = data.imageUrl
  console.log(imageData);
}

function handleSubmit(values) {
  isLoading.value = true;
  console.log(values);
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
  //TODO the IMAGE Validation and SUBMIT
}

</script>

<style>
</style>
