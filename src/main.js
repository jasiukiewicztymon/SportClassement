import { createApp } from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies';
import router from './router'

createApp(App).use(router).use(VueCookies).mount('#app')