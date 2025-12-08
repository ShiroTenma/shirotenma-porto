import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/styles/base.css'
import './assets/styles/portfolio.css'
import './assets/styles/commission.css'
import './assets/styles/home.css'
import './assets/styles/about.css'
import inview from './directives/inview'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('inview', inview)

app.mount('#app')
