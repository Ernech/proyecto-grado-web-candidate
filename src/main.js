import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './routes/router'
import VueGoodWizard from 'vue-good-wizard';
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

library.add(fas,fab)


createApp(App).use(createPinia()).use(router).use(VueGoodWizard).use(VueAwesomePaginate).component('fa',FontAwesomeIcon).mount('#app')
