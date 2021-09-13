import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueRippler from 'vue-rippler'

const vue = createApp(App)
vue.use(VueRippler)
vue.use(router).mount('#app')
