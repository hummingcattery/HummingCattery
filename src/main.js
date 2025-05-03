import './assets/main.css'

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { loadGoogleAnalytics } from './analytics';

const pinia = createPinia();

// Load Google Tag dynamically
loadGoogleAnalytics(import.meta.env.VITE_GOOGLE_ANALYTICS);

// Track route changes
router.afterEach((to) => {
    if (window.gtag) {
      window.gtag('config', import.meta.env.VITE_GOOGLE_ANALYTICS, {
        page_path: to.fullPath,
      });
    }
});

createApp(App).use(router).use(pinia).mount("#app");
