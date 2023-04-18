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
          <div class="flex flex-col items-center">
            <button type="submit" class="submit-btn flex justify-center items-center w-1/2 mr-1 py-2 px-4 font-semibold text-sm text-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 cursor-pointer">
              <svg v-if="isLoading" aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
              </svg>
              <span v-if="!isLoading">Register</span>
            </button>
          </div>
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
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import CustomInput from '@/components/core/CustomInput.vue';
import { ref } from 'vue';

const schema = Yup.object().shape({
  name: Yup.string().required('The name field is required.'),
  email: Yup.string().email('The email must be a valid email address.').required('The email field is required.'),
  password: Yup.string().min(6, 'The password must be at least 6 characters.').required('The password field is required.').oneOf([Yup.ref('password_confirmation')], 'The password confirmation does not match.'),
  password_confirmation: Yup.string().required('The password field is required.')
});
const isLoading = ref(false);

function handleSubmit(values) {
  isLoading.value = true;
  console.log(values);
}

</script>

<style lang="scss">
</style>