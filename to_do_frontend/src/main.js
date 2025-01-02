import { createApp } from 'vue'
import App from './App.vue'
import './style.css';

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
}

const app = createApp(App)
app.use(Toast, options)

app.mount('#app')
