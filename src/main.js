import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import './assets/tailwind.css';

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app');
