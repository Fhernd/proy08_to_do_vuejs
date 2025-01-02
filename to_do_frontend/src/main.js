import { createApp } from 'vue'
import App from './App.vue'
import './style.css';

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
}

App.use(Toast, options);

createApp(App).mount('#app')
