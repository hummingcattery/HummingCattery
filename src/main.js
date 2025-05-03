import './assets/main.css'

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import VueGtag from "vue-gtag-next";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(VueGtag, {
    config: { id: import.meta.env.VITE_GOOGLE_ANALYTICS }
}, router);

app.mount("#app");
