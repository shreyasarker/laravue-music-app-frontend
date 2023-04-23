<template>
  <div id="defaultModal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="fixed inset-0 bg-gray-950 bg-opacity-75 transition-opacity"></div>
    <div class="flex min-h-full items-end justify-center p-4 items-center py-2">
      <div class="relative w-full max-w-2xl max-h-full">
        <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
          <div class="md:flex items-center">
            <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <p class="font-bold">{{ props.title }}</p>
              <p class="text-sm text-gray-700 mt-1">You will lose all of your data. This action cannot be undone.</p>
            </div>
          </div>
          <div class="text-center md:text-right mt-4 md:flex md:justify-end">
            <button @click="confirm('yes')" type="button" class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2">
              Yes
            </button>
            <button @click="confirm('no')" type="button" class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const emit = defineEmits(['confirm', 'showConfirmationDialogue']);

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'Delete'
  }
});

const confirm = (value) => {
  emit('confirm', value);
  emit('showConfirmationDialogue', false);
};

</script>
