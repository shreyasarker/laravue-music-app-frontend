<template>
  <div id=login>
    <div class="w-full p-6 flex justify-center items-center h-screen">
      <div class="w-1/2 bg-black p-8 shadow rounded mb-6">
        <h1 class="mb-6 text-lg text-gray-100 font-thin text-center">What are you waiting for? Please Login.</h1>
        <Form @submit="handleSubmit" :validation-schema="schema">
          <CustomInput name="email" type="text" label="Email" />
          <CustomInput name="password" type="password" label="Password" />
          <SubmitButton btnText="Login" :isLoading="isLoading" />
        </Form>
        <p class="text-center text-md text-white mt-4">Don't have an account, hun?
          <router-link router-link :to="{name: 'register'}" class="text-purple-400 font-bold no-underline hover:underline">
            Register
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import CustomInput from '@/components/core/CustomInput.vue';
import { ref } from 'vue';
import SubmitButton from '@/components/core/SubmitButton.vue';

const schema = Yup.object().shape({
  email: Yup.string().email('The email must be a valid email address.').required('The email field is required.'),
  password: Yup.string().required('The password field is required.')
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

<style lang="scss">
</style>