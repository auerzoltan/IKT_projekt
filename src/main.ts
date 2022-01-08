import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Navbar from '@/components/Navbar.vue';

const app = createApp(App)
    .component("Navbar", Navbar)
        .use(router);
app.mount('#app');