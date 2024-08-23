import 'virtual:uno.css'
import './style/indexH5.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setTheme, theme } from '@/theme'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
console.log(theme.value, '****theme----', theme)
console.log('setTheme----', setTheme(theme.value))
