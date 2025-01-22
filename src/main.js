import axios from 'axios';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const url = 'http://192.168.1.235:3000';

//axios.defaults.headers.common['ngrok-skip-browser-warning'] = 'true';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
            localStorage.setItem('serviceWorker', registration);
        })
        .catch((error) => {
            console.error('Error al registrar el Service Worker:', error);
        });
}


const env = 'dev';

if (env == 'dev') {
    axios.defaults.baseURL = url;
} else {
    
    axios.defaults.baseURL = 'https://puestito.online:3600';
}

const app = createApp(App);
app.use(router);
app.mount('#app');
