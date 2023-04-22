<template>
  <div class="max-w-4xl mx-auto">
    <div class="container">
      <div class="w-full p-6 flex justify-center">
        <div class="w-3/4 bg-black p-8 mb-6">
          <h1 class="mb-6 text-lg text-gray-100 font-thin text-center">
            Edit Profile
            <div class="w-full h-1 mt-2 bg-purple-700"></div>
          </h1>
          <Form @submit="handleSubmit" :validation-schema="schema">
            <CustomInput name="name" type="text" label="Name" />
            <CustomInput name="location" type="text" label="Location" />
            <CropperButton v-bind="imageData" label="Profile Image" btnText="Update Profile Image" @showModal="showModal = true"/>
            <CustomInput name="image" type="hidden" :value="imageUrl" v-bind="field" />
            <CroppedImage v-if="imageUrl" label="Cropped Image" :image="imageUrl" />
            <CustomInput name="description" type="textarea" label="description" />
            <SubmitButton btnText="Update" :isLoading="false"/>
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
import { ref } from 'vue';
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import CustomInput from '@/components/core/CustomInput.vue';
import CropperButton from '@/components/core/CropperButton.vue';
import SubmitButton from '@/components/core/SubmitButton.vue';
import CropperModal from '@/components/core/CropperModal.vue';
import CroppedImage from '@/components/core/CroppedImage.vue';

const schema = Yup.object().shape({
  name: Yup.string('The name must be a string.').required('The name field is required.').max(255, 'The name may not be greater than 255 characters.'),
  location: Yup.string('The location must be a string.').required('The location field is required.').max(255, 'The location may not be greater than 255 characters.'),
  description: Yup.string('The description must be a string.').required('The description field is required.').max(1200, 'The description may not be greater than 1200 characters.'),
  image: Yup.string()
});

const showModal = ref(false);
const imageData = ref(null);
const imageUrl = ref(null);
const isLoading = ref(false);

const setCroppedImageData = (data) => {
  imageData.value = data;
  imageUrl.value = data.imageUrl;
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
