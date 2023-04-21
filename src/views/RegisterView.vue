<template>
  <div id=register>
    <div class="w-full p-6 flex justify-center items-center">
      <div class="w-1/2 bg-black p-8 shadow rounded mb-6">
        <h1 class="mb-6 text-lg text-gray-100 font-thin text-center">Yay! You are here! Please Register.</h1>
        <Form @submit="handleSubmit" :validation-schema="schema">
          <CustomInput name="name" type="text" label="Name" />
          <CustomInput name="email" type="text" label="Email" />
          <CustomInput name="password" type="password" label="Password" />
          <CustomInput name="password_confirmation" type="password" label="Repeat Password" />
          <SubmitButton btnText="Register" :isLoading="isLoading"/>
        </Form>
        <p class="text-center text-md text-white mt-4">Already have an account, hun?
          <router-link router-link :to="{name: 'login'}" class="text-purple-400 font-bold no-underline hover:underline">
            Login
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
  name: Yup.string().required('The name field is required.'),
  email: Yup.string().email('The email field must be a valid email address.').required('The email field is required.'),
  password: Yup.string().min(6, 'The password field must be at least 6 characters.').required('The password field is required.').oneOf([Yup.ref('password_confirmation')], 'The password confirmation does not match.'),
  password_confirmation: Yup.string().required('The password field is required.')
});
const router = useRouter();
const authStore = useAuthStore();
const isLoading = ref(false);

async function handleSubmit(data, {setErrors}) {
  isLoading.value = true;
  try {
    await authStore.register(data);
    isLoading.value = false;
    router.push('/login');
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