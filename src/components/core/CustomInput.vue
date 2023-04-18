<template>
  <div class="relative z-0 w-full mb-6 group">
    <input 
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      @input="handleChange"
      @blur="handleBlur"
      class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" "/>
    <label :for="name" class="uppercase peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-95 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
      {{ label }}
    </label>
    <span class="text-sm text-red-500" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { defineProps, toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  value: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
});

const name = toRef(props, 'name');

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange
} = useField(name, undefined, {
  initialValue: props.value,
});

</script>

<style>
</style>