<template>
  <div class="max-w-4xl mx-auto">
    <div class="container">
      <div class="w-full p-6 flex justify-center">
        <div class="w-3/4 bg-black p-8 mb-6">
          <h1 class="mb-6 text-lg text-gray-100 font-thin text-center">
            Add Song
            <div class="w-full h-1 mt-2 bg-purple-700"></div>
          </h1>
          <Form @submit="handleSubmit" :validation-schema="schema">
            <CustomInput name="title" type="text" label="Title" />
            <CustomInput name="location" type="file" label="Location" />
            <SubmitButton btnText="Add" :isLoading="false"/>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import CustomInput from '@/components/core/CustomInput.vue';
import SubmitButton from '@/components/core/SubmitButton.vue';

const schema = Yup.object().shape({
  name: Yup.string().required('The name field is required.'),
  location: Yup.string().required('The location field is required.'),
  description: Yup.string().required('The description field is required.')
});

const isLoading = ref(false);

function handleSubmit(values) {
  isLoading.value = true;
  console.log(values);
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
}

</script>

<style>
</style>
