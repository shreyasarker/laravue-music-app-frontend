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
import { ref } from 'vue';
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth.store.js';
import { errorToast } from '@/utils/toast.js';
import CustomInput from '@/components/core/CustomInput.vue';
import SubmitButton from '@/components/core/SubmitButton.vue';

const schema = Yup.object().shape({
  email: Yup.string().email('The email field must be a valid email address.').required('The email field is required.'),
  password: Yup.string().required('The password field is required.')
});
const router = useRouter();
const authStore = useAuthStore();
const isLoading = ref(false);

const handleSubmit = async (data, {setErrors}) => {
  isLoading.value = true;
  try {
    await authStore.login(data);
    isLoading.value = false;
    router.push({name: 'home'});
  } catch (error) {
    isLoading.value = false;
    if(error.response.data.errors) {
      setErrors(error.response.data.errors);
    }
    errorToast(error.response.data.message);
  }
}

</script>

<style lang="scss">
</style>