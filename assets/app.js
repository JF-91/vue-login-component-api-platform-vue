import { registerVueControllerComponents } from '@symfony/ux-vue';
import './bootstrap.js';
import  { createApp } from 'vue' 
import App from './App.vue'
import router from './router'
import './styles/app.css';

registerVueControllerComponents(require.context('./vue/controllers', true, /\.vue$/));

createApp(App)
.use(router)
.mount('#app');