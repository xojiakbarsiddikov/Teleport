import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/en'
import router from "@/router";
import './assets/element-varibles.scss'
import App from './App.vue'
import store from './store/app'
import "./assets/appp.css"
import NavBar from "@/components/NavBar";


createApp(App).prodctionTip = false

createApp(App)
    .component('nav-bar', NavBar)
    .use(store)
    .use(router)
    .use(locale)
    .use(ElementPlus)
    .mount('#app')
