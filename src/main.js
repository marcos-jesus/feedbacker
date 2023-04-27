import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'animate.css'
import '@/assets/tailwind.css'
import '@/assets/fonts.css'

import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(Toast, {
  POSITION: POSITION.TOP_RIGHT
})
app.mount('#app')
