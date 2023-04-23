import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import './assets/tailwind.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMusic, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faMusic, faVideo);
const pinia = createPinia();

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(pinia).use(router).mount('#app');
