// main.js
import { createApp,reactive } from 'vue'
import App from './App.vue';
import "./index.css"
const app = createApp(App)
const AppContext = reactive({
    name: '',
  });
app.provide('appContext', AppContext);
app.mount('#app');


