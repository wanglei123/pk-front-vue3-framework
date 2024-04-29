import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.scss'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

const app = createApp(App)
const head = createHead() // <--


app.use(createPinia())
app.use(router)
app.use(head) // <--

app.mount('#app')
