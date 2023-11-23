// main.js
import { createApp,reactive } from 'vue'
import App from './App.vue';
import "./index.css"
const app = createApp(App)
const AppContext = reactive({
    name: '',
    brand:"",
    minPrice:0,
    maxPrice:0,
  });
app.provide('appContext', AppContext);
app.mount('#app');


