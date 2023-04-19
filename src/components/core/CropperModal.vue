<template>
  <div id="defaultModal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="fixed inset-0 bg-gray-950 bg-opacity-75 transition-opacity"></div>
    <div class="flex min-h-full items-end justify-center p-4 items-center py-2">
      <div class="relative w-full max-w-2xl max-h-full">
        <div class="relative rounded-lg shadow bg-gray-700">
          <div class="flex items-start justify-between p-4 border-b rounded-t border-gray-600">
            <h3 class="text-xl font-semibold text-white">
              Crop Image
            </h3>
            <button @click="$emit('showModal', false)" type="button" class="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white" data-modal-hide="defaultModal">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-6 space-y-6">
            <div>
              <label class="block mb-2 text-sm font-medium text-white" for="file_input">Upload image</label>
              <input @change="getUploadedImage" ref="fileInput" class="block w-full text-sm border cursor-pointer bg-gray-50 text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400" id="file_input" type="file">
            </div>
            <div class="flex justify-center max-w-2xl">
              <Cropper
                ref="cropper"
                :src="uploadedImage"
                :stencil-props="{
                    minAspectRatio: minAspectRatioProp.width/minAspectRatioProp.height,
                    maxAspectRatio: maxAspectRatioProp.width/maxAspectRatioProp.height
                }"
                @change="change"
              >
              </Cropper>
            </div>
          </div>
          <div class="flex items-center p-6 space-x-2 border-t rounded-b border-gray-600">
            <button v-if="uploadedImage" @click="crop" type="button" class="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-purple-600 hover:bg-purple-700 focus:ring-purple-800">Crop</button>
            <button @click="$emit('showModal', false)" type="button" class="focus:ring-4 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600">Decline</button>
          </div>
        </div>
      </div>
    </div>
  </div>              
</template>

<script setup>
  import { ref, defineEmits, defineProps, toRefs } from 'vue';
  import { Cropper } from 'vue-advanced-cropper'
  import 'vue-advanced-cropper/dist/style.css';

  const emit = defineEmits(['croppedImageData', 'showModal']);

  const props = defineProps({
      minAspectRatioProp: Object,
      maxAspectRatioProp: Object
  })
  const { minAspectRatioProp, maxAspectRatioProp } = toRefs(props)

  const fileInput = ref(null)
  const cropper = ref(null)
  const uploadedImage = ref(null)
  const croppedImageData = {
      file: null,
      imageUrl: null,
      height: null,
      width: null,
      left: null,
      top: null,
  }

  const getUploadedImage = (e) => {
      const file = e.target.files[0];
      uploadedImage.value = URL.createObjectURL(file);
  }

  const crop = () => {
      const { coordinates, canvas } = cropper.value.getResult();

      croppedImageData.file = fileInput.value.files[0];
      croppedImageData.imageUrl = canvas.toDataURL();
      croppedImageData.height = coordinates.height;
      croppedImageData.width = coordinates.width;
      croppedImageData.left = coordinates.left;
      croppedImageData.top = coordinates.top;

      emit('croppedImageData', croppedImageData);
      emit('showModal', false);
  }
</script>