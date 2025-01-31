import './assets/main.css'

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const pinia = createPinia();

// Load Google Tag dynamically
const GA_ID = import.meta.env.VITE_GOOGLE_ANALYTICS;

if (GA_ID) {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
    `;
    document.head.appendChild(script2);

    console.log("script2 = ", script2)
}

// Track page views when route changes
router.afterEach((to) => {
    if (window.gtag) {
        window.gtag("config", GA_ID, {
        page_path: to.fullPath,
        });
    }
});

createApp(App).use(router).use(pinia).mount("#app");
