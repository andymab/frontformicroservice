
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // для иконок

import { createApp } from 'vue'




import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import api from './plugins/axios'

const app = createApp(App)
app.config.globalProperties.$axios = api

app.use(vuetify).use(router).mount('#app')
