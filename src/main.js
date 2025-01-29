import './assets/main.css'

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
