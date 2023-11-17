import '@/presentation/assets/main.css'
import 'reflect-metadata'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { AppComponent } from './application/di/AppComponents'

import App from './App.vue'
import router from './presentation/router'


AppComponent.init()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
