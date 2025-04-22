
import 'vuetify/styles'
//import '@mdi/font/css/materialdesignicons.css' // для иконок

import { createApp } from 'vue'




import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import axios from 'axios'

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
axios.defaults.headers.common['X-API-KEY'] = 'supersecureapikey'


createApp(App).use(vuetify).use(router).mount('#app')
