// main.js
import { createApp,reactive } from 'vue'
import App from './App.vue';
import "./index.css"
import PrimeVue from 'primevue/config';
const app = createApp(App)
app.use(PrimeVue);
const AppContext = reactive({
    name: '',
    brand:"",
    minPrice:0,
    maxPrice:0,
  });
app.provide('appContext', AppContext);
app.mount('#app');


