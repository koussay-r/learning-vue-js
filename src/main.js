// main.js
import { createApp } from 'vue'
import App from './App.vue';
import "./index.css"
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoArrowThickFromLeft,CoArrowThickFromRight } from "oh-vue-icons/icons/co";
addIcons(CoArrowThickFromLeft,CoArrowThickFromRight)
const app = createApp(App)
app.mount('#app');

