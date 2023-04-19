<template>
  <div class="container">
    <div class="w-full p-6 flex justify-center h-screen">
      <div class="w-3/4 bg-black p-8 mb-6">
        <h1 class="mb-6 text-lg text-gray-100 font-thin text-center">
          Edit Profile
          <div class="w-full h-1 mt-2 bg-purple-700"></div>
        </h1>
        <Form @submit="handleSubmit" :validation-schema="schema">
          <CustomInput name="name" type="text" label="Name" />
          <CustomInput name="location" type="text" label="Location" />
          <CustomInput name="description" type="textarea" label="description" />
          <CropperButton label="Profile Image" btnText="Update Profile Image"/>
          <SubmitButton btnText="Update" :isLoading="false"/>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomInput from '@/components/core/CustomInput.vue';
import CropperButton from '@/components/core/CropperButton.vue';
import SubmitButton from '@/components/core/SubmitButton.vue';

</script>

<style>
</style>
