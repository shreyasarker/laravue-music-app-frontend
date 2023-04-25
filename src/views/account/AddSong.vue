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
            <CustomInput name="song" type="file" label="Song" />
            <SubmitButton btnText="Add" :isLoading="isLoading"/>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import CustomInput from '@/components/core/CustomInput.vue';
import SubmitButton from '@/components/core/SubmitButton.vue';
import { useAuthStore } from '@/store/auth.store.js';
import { useSongStore } from '@/store/song.store.js';
import { errorToast, successToast } from '@/utils/toast';

const schema = Yup.object().shape({
  title: Yup.string('The title must be a string.').required('The title field is required.').max(255, 'The title may not be greater than 255 characters.'),
  song: Yup.mixed().required('The song field is required.')
  .test("type", "The song field must be a file of type: mp3.", (value) => {
    if ( value ) {
      return (value.type === "audio/mpeg");
    } else {
      return true;
    }
  })
});

const router = useRouter();
const authStore = useAuthStore();
const songStore = useSongStore();

const authUser = computed(() => authStore.auth);
const isLoading = ref(false);

const handleSubmit = async (data, {setErrors}) => {
  isLoading.value = true;
  try {
    const response = await songStore.storeSong(data, authUser.value.id);
    isLoading.value = false;
    successToast(response.data.message);
    router.push({name: 'account.profile', params: {id: authUser.value.id}});
  } catch (error) {
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
